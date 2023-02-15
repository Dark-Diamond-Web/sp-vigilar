const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CleverLite = require('../Model/CleverLite_Model')

router.post('/CleverLite_Update',async (req,res,next)=>{
    const totalData = await CleverLite.collection.count();
    const cleverLite = new CleverLite({
        _id: new mongoose.Types.ObjectId,
        auth_key: '6392c77ce3c5ad65775031d0',
        authkey:req.body.authkey,
        LogID:`${totalData + 1}`,
        Controller_IP:req.body.Controller_IP,
        LogTime:req.body.LogTime,
        Remarks:req.body.Remarks,
        Status:req.body.Status,
        Type:req.body.Type,
    })
    cleverLite.save()
    .then(result=>{
        console.log(result)
        res.status(200).json({
            CleverLite:result 
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
    CleverLite.find()
    .select("-_id -__v")
    .exec()
    .then(result=>{
        res.status(200).json({
            CleverLitedata:result,
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