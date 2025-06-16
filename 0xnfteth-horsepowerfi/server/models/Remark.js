const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const remarkSchema = mongoose.Schema({
    comment: {
        type: String
    },
    isDeleted: {
        type: Date,
        default: null
    },
    // createdBy: {
    //     type: Schema.Types.ObjectId,
    //     refPath: "deletedByModel"
    // },
    // deletedBy: {
    //     type: Schema.Types.ObjectId,
    //     refPath: "deletedByModel"
    // },
    // deleteByModel: {
    //     type: String,
    //     enum: ['dispatcher', 'admin', 'user', 'superadmin']
    // },
    // reason: {
    //     type: String//product_tobereturned,cancel_order_by_admin, cancel_order_by_user, disapprove_product
    // }
}, { timestamps: true });
module.exports = mongoose.model('remark', remarkSchema);