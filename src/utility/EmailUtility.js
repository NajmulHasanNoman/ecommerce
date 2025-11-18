import nodemailer from 'nodemailer';
export async function SendEmail(EmailTo, EmailText,EmailSubject) {
    let Transport = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:25,
        secure:false,
        auth:{user:"najmulhasannoman72@gmail.com", pass:"oqma njdx nomp xdcv"},
        tls:{rejectUnauthorized:false}
    })
    let MailOption={
        from:"Next Ecommerce<najmulhasannoman72@gmail.com>",
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }
    return await Transport.sendMail(MailOption)
}