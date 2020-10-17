const expressJWT = require('express-jwt');
const { KEY } = require('./consts.js'); //密钥会多次用到  封装为常量减少出错

const jwtAuth = expressJWT({
    secret: KEY, // 对应着生成 token 时的密钥字符串
    algorithms: ['HS256'],
    credentialsRequired: true
}).unless({
    // 配置不需要 token 验证的 url 路径
    path: ['/users/login', '/users/register', '/users/isLogin', '/managers/login', '/managers/register', '/managers/isLogin', '/users/sign', '/images/upload', '/managers/loginAdmin']
});

module.exports = jwtAuth;