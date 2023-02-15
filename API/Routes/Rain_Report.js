const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Rain_Report = require('../Model/Rain_Report_Model')

router.post('/Rain_Report_Update',async (req,res,next)=>{
    const totalData = await Rain_Report.collection.count();
    const rain_Report = new Rain_Report({
        _id: new mongoose.Types.ObjectId,
        auth_key: '6392c77ce3c5ad65775031d0',
        LogID:`${totalData + 1}`,
        Controller_IP:req.body.Controller_IP,
        Raining:req.body.Raining,
        RainTime:req.body.RainTime,
        Raining_Value:req.body.Raining_Value,
    })
    rain_Report.save()
    .then(result=>{
        console.log(result)
        res.status(200).json({
            Rain_Report:result 
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
    Rain_Report.find()
    .select("-_id -__v")
    .exec()
    .then(result=>{
        res.status(200).json({
            Rain_Report:result,
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