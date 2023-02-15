const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Weather_Report = require('../Model/Weather_Report_Model')

router.post('/Weather_Report_Update',async (req,res,next)=>{
    const totalData = await Weather_Report.collection.count();
    const weather_Report = new Weather_Report({
        _id: new mongoose.Types.ObjectId,
        auth_key: '6392c77ce3c5ad65775031d0',
        LogID:`${totalData + 1}`,
        Controller_IP:req.body.Controller_IP,
        WeatherLogTime:req.body.WeatherLogTime,
        Carbon_Monoxide_sensor_CO:req.body.Carbon_Monoxide_sensor_CO,
        Ozone_sensor_O3:req.body.Ozone_sensor_O3,
        Nitrogen_Dioxide_sensor_NO2:req.body.Nitrogen_Dioxide_sensor_NO2,
        Sulphur_Dioxide_sensor_SO2:req.body.Sulphur_Dioxide_sensor_SO2,
        Carbon_Dioxide_sensor_CO2:req.body.Carbon_Dioxide_sensor_CO2,
        Particulate_Profile_sensor_PM2_5:req.body.Particulate_Profile_sensor_PM2_5,
        Particulate_Profile_sensor_PM10:req.body.Particulate_Profile_sensor_PM10,
        Temperature_sensor:req.body.Temperature_sensor,
        Relative_Humidity_sensor:req.body.Relative_Humidity_sensor,
        Wind_Speed_sensor:req.body.Wind_Speed_sensor,
        Wind_direction_sensor:req.body.Wind_direction_sensor,
        Rainfall_sensor:req.body.Rainfall_sensor,
        Barometric_Pressure_sensor:req.body.Barometric_Pressure_sensor,
        Noise_sensor:req.body.Noise_sensor,
        Create_Datetime:req.body.Create_Datetime,
        Update_Datetime:req.body.Update_Datetime
    })
    weather_Report.save()
    .then(result=>{
        console.log(result)
        res.status(200).json({
            weather_Report:result 
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
 
router.get('/Details',(req,res,next)=>{
    Weather_Report.find()
    .select("-_id -__v")
    .exec()
    .then(result=>{
        res.status(200).json({
            Weather_Report:result,
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;