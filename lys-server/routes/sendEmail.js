const express = require("express");
const router = express.Router();
require("dotenv").config();
const userValidation = require("../validations/validateUser");

router.use(userValidation);

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
router.post("/contact", async(req, res, next) => {
    try {

        const email = await main(req.body)
        console.log(email, "email")
        if (email) return res.json({ message: "Email Sent" })
    } catch (error) {
        console.log(error.message)
    }
})


module.exports = router;


const main = async(obj) => {

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
        to: 'lys.furniture@gmail.com', // list of receivers
        subject: `👻Сообщение с сайта`, // Subject line
        html: `
        <div style="border: green 1px solid; padding: 5%">
            <h2>Contact Request</h2>
            <ul>  
                <li>Имя: ${obj.name}</li>
                <li>Контактный метод: ${obj.email || obj.phone}</li>
            </ul>
            <h3>Сообщение:</h3>
            <p>${obj.text}</p>
        </div>
          `
    });
    return info.messageId;
}