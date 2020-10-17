const { ordersModel } = require('./models/ordersModels');
// 添加订单
module.exports.addOrder = async function(data) {
    await ordersModel.create(data);
};
// 获取所有订单
module.exports.getAllOrders = async function(data) {
    const num = await ordersModel.find({ removed: false });
    const delnum = await ordersModel.find({ removed: true });
    const msg = await ordersModel.find().populate('goodId').populate('userId').
    limit(data.datanum - 0).skip((data.pagenum - 1) * (data.datanum - 0));
    return {
        data: msg,
        num: num.length,
        delnum: delnum.length
    }
};
// 获取指定的订单
module.exports.getOrder = async function(data) {
    const msg = await ordersModel.find({ _id: data })
    return {
        data: msg
    }
};
// 删除订单
module.exports.delOrder = async function(data) {
    console.log(data);
    let msg = await ordersModel.updateOne({ _id: data._id }, { removed: data.success });
    return {
        msg: msg
    }
};