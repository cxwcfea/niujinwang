var mongoose = require('mongoose');

var applySchema = new mongoose.Schema({

    userID: {type:String, required:'{PATH} is required!'},
    amount: {type:Number, required:'{PATH} is required!'},
    cycle: {type:Number, required:'{PATH} is required!'},
    lever: {type:Number, required:'{PATH} is required!'},
    deposit: {type:Number, required:'{PATH} is required!'},
    interest: {type:Number, required:'{PATH} is required!'},
    createdAt: {type:Date, default: Date.now() },
    approved: { type: Boolean, default: false },
    approveAt: Date,
    endedAt: Date

});

module.exports = mongoose.model('Apply', applySchema);
