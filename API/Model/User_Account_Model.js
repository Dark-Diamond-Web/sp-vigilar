const mongoose = require('mongoose');
const UserAccountDetails = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    First_Name:String,
    Last_Name:String,
    Company_Name:String,
    email:String,
    Cleverlite:String,
    Camera:String,
    ERS:String,
    Rain_Sensor:String,
    Weather_Station:String,
    password:String
})
module.exports = mongoose.model('UserAccountDetails',UserAccountDetails)
