const mongoose = require('mongoose');
const PoleRegistration = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    auth_key:String,
    Pole_ID:String,
    Controller_IP:String,
    Location:String,
    server_IP:String,
    port:String,
})
module.exports = mongoose.model('PoleRegistration',PoleRegistration)
