const mongoose = require('mongoose');
const CleverLiteSetting = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    auth_key: String,
    Scheduler_Time_From:String,
    Scheduler_Time_To:String,
    Dimming_Time_From:String,
    Dimming_Time_To:String,
})
module.exports = mongoose.model('CleverLiteSetting',CleverLiteSetting); 