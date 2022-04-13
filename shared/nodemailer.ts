import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export const sendMail = async() => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.USERMAIL, // generated ethereal user
            pass: process.env.SEND_MAIL, // generated ethereal password
        },
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: process.env.USERMAIL, // sender address
        to: process.env.USERMAIL, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<h1>Hello world?</h1>", // html body
    }, (error, info) => {
        if (error) {
            //return res.status(400).json({ name: 'John Doe' })
        }
    });

     
}
