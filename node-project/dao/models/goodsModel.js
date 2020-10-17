const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    type: String,
    name: String,
    image: Object,
    detailimg: Array,
    store: String,
    detail: Object,
    price: String,
    status: Boolean,
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shopsModel'
    }
}, { versionKey: false });
module.exports.goodsModel = mongoose.model('goodsModel', goodsSchema, 'goods');