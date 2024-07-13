  const nodemailer = require("nodemailer");


  const mailSender = async(email , title , body)=>{
    try{
       let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth:{
            user:'webmaster.kalpshiksha@gmail.com',
            pass: 'svbazmqiprsxyeil',
        }
       })


       let info = await transporter.sendMail({
         from: '"Kalp Shiksha" <webmaster.kalpshiksha@gmail.com>', // sender address
         to: email, // list of receivers
         subject: title, // Subject line
         html: body, // html body
       })

       console.log("this is email send info ",info);
       return info;
    }
     catch(error){
        console.log(error);

     }
  }

 module.exports = mailSender;