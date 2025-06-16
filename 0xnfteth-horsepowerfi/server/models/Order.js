const mongoose = require("mongoose");
const { allOrderStatus } = require("../middleware/common");

const Schema = mongoose.Schema
const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point']
    },
    coordinates: {
        type: [Number]
    }
});
const orderSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    orderID:{
        type: String,
        require: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: "payment",
    },
    quantity: {
        type: Number
    },
    soldBy:{
        type: Schema.Types.ObjectId,
        ref:"admin"
    },
    status: {
        currentStatus: {
            type: String,
            enum: allOrderStatus
        },
        activeDate: {
            type: Date,
            default: null
        },
        approvedDate: {
            type: Date,
            default: null
        },
        dispatchedDetail: {
            dispatchedDate: {
                type: Date,
                default: null
            },
            dispatchedBy: {
                type: Schema.Types.ObjectId,
                ref: 'dispatcher'
            },
        },
        cancelledDetail: {
            cancelledDate:{
                type: Date,
                default: null
            },
            cancelledBy:{
                type: Schema.Types.ObjectId,
                refPath: "cancelledByModel"
            },
            remark: {
                type: Schema.Types.ObjectId,
                ref: 'remark'
            },
        },
        completedDate: {
            type: Date,
            default: null
        },
        tobereturnedDate: {
            type: Date,
            default: null
        },
        // tobeReturnedDetail: {
        //     tobereturnedDate: {
        //         type: Date
        //     },
        //     remark: {
        //         type: Schema.Types.ObjectId,
        //         ref: 'remark'
        //     },
        // },        
        returnedDetail: {
            returnedDate: {
                type: Date,
                default: null
            },
            returneddBy: {
                type: Schema.Types.ObjectId,
                ref: 'dispatcher'
            },
            remark: [{
                type: Schema.Types.ObjectId,
                ref: 'remark'
            }],
        },
    },
    shipto:{
        region: {//pradesh
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        area: {//tole,area name
            type: String,
            trim: true,
        },
        address: {//street level address
            type: String,
            trim: true,
        },
        geolocation: {
            type: pointSchema,
        },
        phoneno: {
            type: String,
            trim: true,
            max: 9999999999,
        }
    },
    isPaid:{
        type: Boolean,
        default: false
    },
    cancelledByModel: {
        type: String,
        enum: ['user', 'admin']
    },
    productAttributes:{
        type: String
    }
}, { timestamps: true });
orderSchema.index({ geolocation: "2dsphere" });

module.exports = mongoose.model("order", orderSchema);