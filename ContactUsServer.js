const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
 

const PORT = process.env.PORT || 5000;

app.use(express.static('ContactUs'));
app.use(express.json())



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/ContactUs/ContactUs.html')
})

app.post('/',(req,res)=>{
    

    const transporter = nodemailer.createTransport({
        service : 'smtp.gmail.com',
        port : 465,
        auth : {
            user : 'ankitkumarsingh.techmihirnaik@gmail.com',
            pass : 'techmihir@ankit'
        }
    })

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
            console.log("Email sent successfully" + info.response) 
            res.send('success')
        }
    })
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  }); 

