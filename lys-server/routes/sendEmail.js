const express = require("express")
const router = express.Router();
require("dotenv").config()


const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
router.post("/contact", async(req, res, next) => {
    const { name, subject, phone, email, text } = req.body
    const main = async() => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTPHOSTEMAILUSER,
                pass: process.env.SMTPHOSTEMAILPASSWORD,
            }
            // ,
            // tls: {
            //     rejectUnauthorized: false
            // }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: process.env.SMTPHOSTEMAILUSER, // sender address
            to: process.env.DESIGNATEDSUPPORTEMAIL, // list of receivers
            subject: `👻 Cообщение от «${name}» с сайта.`, // Subject line
            // text: "lol?", // plain text body
            html: `
            <h3>Контактная информация:</h3>
            <ul>  
              <li>Имя: ${name}</li>
              <li>Почта: ${email}</li>
              <li>Телефон: ${phone}</li>
            </ul>
            <h3>Cообщение:</h3>
            <p>${text}</p>
          `
        });

        console.log("Message sent: %s", info.messageId);
        if (info.messageId) return res.status(200).json({ message: "Email Sent" })
    }
    main().catch(console.error);
})




module.exports = router;