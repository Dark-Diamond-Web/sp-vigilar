const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CleverLiteSetting = require('../Model/CleverLiteSetting')

router.post('/Settings',(req,res,next)=>{
    const cleverLiteSetting = new CleverLiteSetting({
        _id: new mongoose.Types.ObjectId,
        auth_key: '6392c77ce3c5ad65775031d0',
        Scheduler_Time_From:req.body.Scheduler_Time_From,
        Scheduler_Time_To:req.body.Scheduler_Time_To,
        Dimming_Time_From:req.body.Dimming_Time_From,
        Dimming_Time_To:req.body.Dimming_Time_To,
    })
    cleverLiteSetting.save()
    .then(result=>{
        console.log(result)
        res.status(200).json({
            CleverLiteSetting:result 
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
    CleverLiteSetting.find()
    .select("-_id -__v")
    .exec()
    .then(result=>{
        res.status(200).json({
            CleverLiteSetting:result,
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