const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ERS_Report = require('../Model/ERS_Report_Model')


router.post('/ERS_Report_Update',async (req,res,next)=>{
    const totalData = await ERS_Report.collection.count();
    const ers_Report = new ERS_Report({
        _id: new mongoose.Types.ObjectId,
        auth_key: '6392c77ce3c5ad65775031d0',
        LogID:`${totalData + 1}`,
        Controller_IP:req.body.Controller_IP,
        AlertTime:req.body.AlertTime,
        Remarks:req.body.Remarks,
    })
    ers_Report.save()
    .then(result=>{
        console.log(result)
        res.status(200).json({
            ERS_Report:result 
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
    ERS_Report.find()
    .select("-_id -__v")
    .exec()
    .then(result=>{
        res.status(200).json({
            ERS_Report:result,
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