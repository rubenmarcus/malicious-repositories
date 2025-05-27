const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema
const dispatcherSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    address: {
        type: String,
        trim: true,
        maxlength: 32
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
    salt: String,
    resetPasswordLink: {
        type: String,
        default: ""
    },
    isBlocked: {
        type: Date,
        default: null
    }
}, { timestamps: true });

const sha512 = function (password, salt) {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let value = hash.digest('hex');
    return {
        passwordHash: value
    };
};
dispatcherSchema.pre('save', function (next) {
    let dispatcher = this;
    if (dispatcher.isModified('password')) {
        // salt
        const ranStr = function (n) {
            return crypto.randomBytes(Math.ceil(8))
                .toString('hex')
                .slice(0, n);
        };
        // applying sha512 alogrithm
        let salt = ranStr(16);
        let passwordData = sha512(dispatcher.password, salt);
        dispatcher.password = passwordData.passwordHash;
        dispatcher.salt = salt;
        next();
    } else {
        next();
    }
})
dispatcherSchema.statics.findByCredentials = async function (email, password) {
    let Dispatcher = this;
    const dispatcher = await Dispatcher.findOne({ email })
    if (!dispatcher) return ''
    let passwordData = sha512(password, dispatcher.salt)
    if (passwordData.passwordHash == dispatcher.password) {
        return dispatcher
    }
}
module.exports = mongoose.model("dispatcher", dispatcherSchema);