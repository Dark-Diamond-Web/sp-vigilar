const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PoleRegistration = require('../Model/Pole_Registration_Model')

const { networkInterfaces } = require('os');
const nets = networkInterfaces();
const results = Object.create(null); 
for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
            this.SystemIP = net.address;
            // console.log(this.SystemIP);
        }
    }
}

router.post('/registration', async (req, res, next) => {
    const totalData = await PoleRegistration.collection.count();
    const poleRegistration = new PoleRegistration({
        _id: new mongoose.Types.ObjectId,
        auth_key: '6392c77ce3c5ad65775031d0',
        Pole_ID: `00${totalData + 1}`,
        Controller_IP: req.body.Controller_IP,
        Location: req.body.Location,
        server_IP: this.SystemIP,
        port: '3002',
    })
    poleRegistration.save() 
        .then(result => {
            console.log(result)
            res.status(200).json({
                PoleDetails: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

router.get('/Details', (req, res, next) => {
    PoleRegistration.find()
        .select("-_id -__v")
        .exec()
        .then(result => {
            res.status(200).json({
                PoleDetails: result,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})



router.get('/Pole', async (req, res, next) => {
    PoleRegistration.find()
        .select("Pole_ID -_id")
        .exec()
        .then(async result => {
            let lastDoc = (await PoleRegistration.find({}).sort({ _id: -1 }).limit(1))[0];
            console.log(lastDoc);
            res.status(200).json({
                PoleDetails: lastDoc,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router;