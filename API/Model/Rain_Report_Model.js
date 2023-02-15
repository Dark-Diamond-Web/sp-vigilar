const mongoose = require('mongoose');
const Rain_Report = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    auth_key:String,
    LogID:String,
    Controller_IP:String,
    Raining:String,
    RainTime:String,
    Raining_Value:String,
})
module.exports = mongoose.model('Rain_Report',Rain_Report)
