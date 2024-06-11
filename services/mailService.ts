let nodemailer = require("nodemailer");

export async function sendMail(name: string, email: string, message: string) {
        
        const transporter = nodemailer.createTransport({
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
          },
          secure: false,
        });

        const mailData = {
          from: email,
          to: "desiguallab@gmail.com",
          subject: `Mensagem do usuário ${name} (Desigual Lab)`,
          html: `<div>${message}</div><p>Enviado de:
          ${email}</p>`,
        };

        transporter.sendMail(mailData, function (err: Error) {
          if (err) console.log(err);
        });
}
