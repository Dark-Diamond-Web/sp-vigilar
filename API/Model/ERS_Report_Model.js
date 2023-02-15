const mongoose = require('mongoose');
const ERSReport = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    auth_key:String,
    LogID:String,
    Controller_IP:String,
    AlertTime:String,
    Remarks:String,
})
module.exports = mongoose.model('ERSReport',ERSReport)
