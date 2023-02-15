const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserAccountDetails = require('../Model/User_Account_Model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

router.post('/UserAccount', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }
        else {
            const userAccountDetails = new UserAccountDetails({
                _id: new mongoose.Types.ObjectId,
                First_Name: req.body.First_Name,
                Last_Name: req.body.Last_Name,
                Company_Name: req.body.Company_Name,
                email: req.body.email,
                Cleverlite: req.body.Cleverlite,
                Camera: req.body.Camera,
                ERS: req.body.ERS,
                Rain_Sensor: req.body.Rain_Sensor,
                Weather_Station: req.body.Weather_Station,
                password:hash,
            })
            userAccountDetails.save()
                .then(result => {
                    console.log(result)
                    res.status(200).json({
                        Customer_Data: result
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                })
            var mailOptions = {
                from: ' "VUCCA" <vigilar@safeprocctv.com> ',
                to: userAccountDetails.email,
                subject: 'VUCCA password created Successfully',
                html: `<p>Dear <strong>${userAccountDetails.First_Name} !</strong> Your Password created Successfully!</p>
                
                        <br>
                        <p>Best Regards,</p>
                        <h3 style="color: #0d4f93;" >SAFEPRO AI VIDEO RESEARCH LABS PVT. LTD.</h3>
                        <p style="font-size: 12px;">Regd. Off: 122 3rd main gruhalakshmi layout 2nd stage Kamalanagar Bengaluru 560079 Karnataka India
                        T: +91 80 2323 0607 | M: +91 94490 60695 | E: sujayrao@safepro.tech | M: +91 82772 82772 </p>
                        <p style="font-size: 14px;"><strong>Please visit:</strong>  www.safeprocctv.com  www.safepro.tech </p>
                `
            }
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error)
                }
                else {
                    console.log('verification Sent!!!!')
                }
            })
        }
    })
})

var transporter = nodemailer.createTransport({
    host: "safeprocctv.com",
    port: 465,
    secure: true, // use TLS
    auth: {
        user: "vigilar@safeprocctv.com",
        pass: "Safepro@2020",
    },
    tls: {
        rejectUnauthorized: false,
    },
})

router.post('/login', (req, res, next) => {
    UserAccountDetails.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(200).json({
                    message: 'User Not Found!',
                    status_code: 404
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (!result) {
                    return res.status(200).json({
                        message: 'Incorect password',
                        status_code: 404
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        First_Name: user[0].First_Name,
                        Last_Name: user[0].Last_Name,
                        Company_Name: user[0].Company_Name,
                        email: user[0].email,
                        Cleverlite: user[0].Cleverlite,
                        Camera: user[0].Camera,
                        ERS: user[0].ERS,
                        Rain_Sensor: user[0].Rain_Sensor,
                        Weather_Station: user[0].Weather_Station,
                        status_code: 200
                    },
                        'User Details',
                        {
                            expiresIn: "1h"
                        }
                    );
                    res.status(200).json({
                        First_Name: user[0].First_Name,
                        Last_Name: user[0].Last_Name,
                        Company_Name: user[0].Company_Name,
                        email: user[0].email,
                        Cleverlite: user[0].Cleverlite,
                        Camera: user[0].Camera,
                        ERS: user[0].ERS,
                        Rain_Sensor: user[0].Rain_Sensor,
                        Weather_Station: user[0].Weather_Station,
                        token: token,
                        status_code: 200
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err
            })
        })
})


router.get('/', (req, res, next) => {
    UserAccountDetails.find()
    .select("-_id -__v")
    .exec()
        .then(result => {
            res.status(200).json({
                UserAccountDetails: result
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