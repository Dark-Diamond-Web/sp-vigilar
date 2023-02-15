const mongoose = require('mongoose');
const CleverLite = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    authkey:String,
    LogID:String,
    Controller_IP:String,
    LogTime:String,
    Remarks:String,
    Status:String,
    Type:String,
})
module.exports = mongoose.model('CleverLite',CleverLite)
