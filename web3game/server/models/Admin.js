const mongoose = require("mongoose");
const crypto = require("crypto");
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
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    shopName: {
        type: String,
        trim: true,
        maxlength: 32
    },
    address: {
        type: String,
        trim: true,
        maxlength: 32
    },
    geolocation: {
        type: pointSchema,//of superadmin used to calculate geodistance between user nd the order dispatch system
    },
    shippingRate: {
        type: Number// added only by superadmin
    },
    shippingCost: {
        type: Number// added only by superadmin
    },
    district: {
        type: String,
        trim: true,
        maxlength: 32
    },
    muncipality: {
        type: String,
        trim: true,
        maxlength: 32
    },
    wardno: {
        type: Number
    },
    businessInfo: {
        type: Schema.Types.ObjectId,
        ref: "businessinfo"
    },
    adminBank: {
        type: Schema.Types.ObjectId,
        ref: "adminbank"
    },
    adminWareHouse: {
        type: Schema.Types.ObjectId,
        ref: "adminwarehouse"
    },
    phone: {
        type: Number,
        max: 9999999999
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    holidayMode: {
        start: {
            type: Number
        },
        end: {
            type: Number
        }
    },
    salt: String,
    role: {
        type: String,
        enum: ["admin", "superadmin"],
        default: "admin"
    },
    resetPasswordLink: {
        type: String,
        default: ""
    },
    emailVerifyLink: {
        type: String,
        default: ""
    },
    isVerified: {
        type: Date,
        default: null
    },
    isBlocked: {
        type: Date,
        default: null
    }
}, { timestamps: true });
adminSchema.index({ geolocation: "2dsphere" });

const sha512 = function (password, salt) {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let value = hash.digest('hex');
    return {
        passwordHash: value
    };
};
adminSchema.pre('save', function (next) {
    let admin = this;
    if (admin.isModified('password')) {
        // salt
        const ranStr = function (n) {
            return crypto.randomBytes(Math.ceil(8))
                .toString('hex')
                .slice(0, n);
        };
        // applying sha512 alogrithm
        let salt = ranStr(16);
        let passwordData = sha512(admin.password, salt);
        admin.password = passwordData.passwordHash;
        admin.salt = salt;
        next();
    } else {
        next();
    }
})
adminSchema.statics.findByCredentials = async function (email, password) {
    let Admin = this;
    const admin = await Admin.findOne({ email })
    if (!admin) return ''
    let passwordData = sha512(password, admin.salt)
    if (passwordData.passwordHash == admin.password) {
        return admin
    }
}
module.exports = mongoose.model("admin", adminSchema);