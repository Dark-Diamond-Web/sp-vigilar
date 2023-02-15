const express = require('express');
const app = express();
const userAccountDetails = require('./API/Routes/UserAccountDetails');
const PoleRegistration = require('./API/Routes/PoleRegistration');
const CleverLite = require('./API/Routes/CleverLite');
const ERS_Report = require('./API/Routes/ERS_Report');
const RainReport = require('./API/Routes/Rain_Report');
const Weather_Report = require('./API/Routes/Weather_Report');
const CleverLiteSetting = require('./API/Routes/CleverLiteSetting');
const IP_Scanner = require('./API/Routes/ip_sacnner');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://SafeproAI:hgQrE7oQE7dejFy3@cluster0.hspxju6.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err) 
    } else {
        console.log("Database Connection Success!!")
    }
})

// mongoose.connect("mongodb://localhost:27017/VUCCA_V2", {
//     useNewUrlParser: true, useUnifiedTopology: true
// }, (err) => {
//     if (err) {
//         console.log(err) 
//     } else {
//         console.log("Database Connection Success!!")
//     }
// })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/userAccountDetails', userAccountDetails);
app.use('/Pole', PoleRegistration);
app.use('/CleverLite', CleverLite);
app.use('/ERS_Report', ERS_Report);
app.use('/RainReport', RainReport);
app.use('/Weather_Report', Weather_Report);
app.use('/CleverLiteSetting',CleverLiteSetting);
app.use('/IP_Scanner',IP_Scanner);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Invalid response',
        status_code: '404'
    })
})

module.exports = app;



// hgQrE7oQE7dejFy3
// SafeproAI

// 49.205.131.61/32