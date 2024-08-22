const nodemailer = require('nodemailer');

const { EMAIL, PASSWORD } = require('../env.js')

const sendOTPmail = (req, res) => {

    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ message: 'Email and OTP are required' });
      }

    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let message = {
        from : EMAIL,
        to : email,
        subject: "File-Directory OTP!",
        text: `Your OTP is:  ${otp}`
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "The OTP has sended to your GMail!"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("sendOTPmail Successfully...!");
}


module.exports = {
    sendOTPmail
}