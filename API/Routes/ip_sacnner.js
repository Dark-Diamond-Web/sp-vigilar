const express = require('express');
const router = express.Router();
const find = require('local-devices');

// find().then(devices => {
//     console.log(devices);
// })

router.get('/',(req,res,next)=>{
    find().then(devices=>{
        res.status(200).json({
            Ip_Scanner:devices,
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