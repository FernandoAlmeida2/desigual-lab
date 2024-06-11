import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../../../services/mailService";

export const dynamic = "force-dynamic";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {

    const requestMethod = req.method;

    switch (requestMethod) {
      case "POST":

        const formData = await req.body;

        await sendMail(formData.name, formData.email, formData.message)

        res.status(200).json({ message: 'Mensagem enviada com sucesso!' })
        break;

      // handle other HTTP methods
      default:
        res.status(200).json({ message: 'Hello from Next.js!' })

    }
  } catch (error) {
    console.log(error);
  }
}

/* export async function POST(Request: Request) {
  let nodemailer = require("nodemailer");
  const formData = await Request.json();

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
    from: formData.email,
    to: "fernandoalmeida@fisica.ufc.br",
    subject: `Mensagem do usuário ${formData.name} (Frente e Verso)`,
    html: `<div>${formData.message}</div><p>Enviado de:
    ${formData.email}</p>`,
  };

  transporter.sendMail(mailData, function (err: Error) {
    if (err) console.log(err);
  });

  //response.setHeader('Content-Security-Policy', "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';");

  //return response;

  return new Response("Mensagem enviada com sucesso!", {
    status: 200,
  });
} */

//observatoriodefortaleza@iplanfor.fortaleza.ce.gov.br
