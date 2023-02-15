const mongoose = require('mongoose');
const Weather_Report = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    auth_key:String,
    LogID:String,
    Controller_IP:String,
    WeatherLogTime:String,
    Carbon_Monoxide_sensor_CO:String,
    Ozone_sensor_O3:String,
    Nitrogen_Dioxide_sensor_NO2:String,
    Sulphur_Dioxide_sensor_SO2:String,
    Carbon_Dioxide_sensor_CO2:String,
    Particulate_Profile_sensor_PM2_5:String,
    Particulate_Profile_sensor_PM10:String,
    Temperature_sensor:String,
    Relative_Humidity_sensor:String,
    Wind_Speed_sensor:String,
    Wind_direction_sensor:String,
    Rainfall_sensor:String,
    Barometric_Pressure_sensor:String,
    Noise_sensor:String,
    Create_Datetime:String,
    Update_Datetime:String,

})
module.exports = mongoose.model('Weather_Report',Weather_Report)
