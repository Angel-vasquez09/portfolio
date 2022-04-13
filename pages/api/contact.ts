import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
| { name: string }
| { ok  : boolean  }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let nodemailer = require('nodemailer')

    const { from, subject, text, html } = req.body;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.USER_MAIL, // generated ethereal user
            pass: process.env.PASS_MAIL, // generated ethereal password
        },
    });

    transporter.sendMail({
        from, // sender address
        to     : process.env.USER_MAIL, // list of receivers
        subject: "Mensaje Portfolio ✔", // Subject line
        text, // Nombre del usuario
        html // html body
    }, (error: any, info: any) => {
        if (error) {
            return res.status(400).json({ ok: false })
        }
    });

    return res.status(200).json({ ok: true })
}