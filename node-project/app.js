var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入的token文件=========================================================================
var jwtAuth = require('./utils/jwt.js');

// 链接数据库==============================================================================
require('./dao/database');

var app = express();
// 拦截二级路径的js文件=====================================================================
var goodsRouter = require('./routes/good')
var imagesRouter = require('./routes/images');
var shopsRouter = require('./routes/shops')
var shopsManagerRouter = require('./routes/shopManagerRouter/shopManager');
var usersRouter = require('./routes/users');
var managersRouter = require('./routes/managers');
var ordersRouter = require('./routes/orders');
var cartRouter = require('./routes/cart')


// 跨域===================================================================================
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "token,X-Requested-With,Origin,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 调用跨域==============================================================================
app.use(allowCrossDomain); // 使用该中间件


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/shopsManager', shopsManagerRouter);

//启用token拦截  在所有一级路径前===============================================
app.use(jwtAuth);



// 匹配前段ajax请求的URL中的一级路径======================================================
app.use('/goods', goodsRouter);
app.use('/images', imagesRouter);
app.use('/shops', shopsRouter);
app.use('/users', usersRouter); //用户登录注册
app.use('/managers', managersRouter); //商家登录注册
app.use('/orders', ordersRouter);
app.use('/cart',cartRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// module.exports = app;
app.listen(3000, () => console.log('3000 端口启动成功!!!'));