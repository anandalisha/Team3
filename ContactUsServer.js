const express = require("express");
const nodemailer = require("nodemailer")
const multiparty = require("multiparty");
require("dotenv").config();
 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('ContactUs'));
app.use(express.json())



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/ContactUs/ContactUs.html')
})

app.post('/',(req,res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service : 'smtp.gmail.com',
        port : 587,
        auth : {
            user : 'ankitkumarsingh.techmihirnaik@gmail.com',
            pass : 'ankit@techmihir'
        }
    });

    const mailOptions = {
        from : req.body.email,
        to : 'ankitkumarsingh.techmihirnaik@gmail.com',
        subject : 'Message from ${req.body.email} : ${req.body.subject}',
        text: req.body.message
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
            res.send('error')
        }else{
            console.log("Email sent successfully")
            res.send('success')
        }
    })
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  }); 

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com", //replace with your email provider
//   port: 587,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   },
// });

// // console.log(process.env.EMAIL)

// transporter.verify(function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

//   app.post("/send", (req, res) => {
//     let form = new multiparty.Form();
//     let data = {};
//     form.parse(req, function (err, fields) {
//       console.log(fields);
//       Object.keys(fields).forEach(function (property) {
//         data[property] = fields[property].toString();
//       });
  
     
//       const mail = {
//         from: data.name,
//         to: process.env.EMAIL,
//         subject: data.subject,
//         text: `${data.name} <${data.email}> \n${data.message}`,
//       };
  
      
//       transporter.sendMail(mail, (err, data) => {
//         if (err) {
//           console.log(err);
//           res.status(500).send("Something went wrong.");
//         } else {
//           res.status(200).send("Email successfully sent to recipient!");
//         }
//       });
//     });
//   });
  
