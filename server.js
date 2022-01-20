const express  = require("express");
const bodyParser = require("body-parser");
const path = require ("path");
const nodemailer = require("nodemailer");

const { getMaxListeners } = require("process");
const PORT = process.env.PORT || 3000;
require ('dotenv').config();

const app = express();

//Middleware
app.use(express.static("public")); 
app.use(express.json());

//HOME

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html"); 
});

app.post('/', (req, res)=> {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'alanbahena1@gmail.com',
    subject: "Tienes un nuevo mensaje de un Cliente",
    text: req.body.message
  };

  transporter.sendMail(mailOptions, (error, info)=> {
    if(error){
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response)
      res.send('success')
    }
  });

});

app.listen(PORT, () => {          
  console.log('Server running on port ${PORT}');
});
