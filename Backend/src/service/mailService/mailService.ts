import nodemailer from "nodemailer";

class MailService {
  static async mailService() {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER as string,
        pass: process.env.MAIL_PASS as string,
      },
    });
    const configEmail = {
      from: process.env.MAIL_USER as string,
      to: "g.viegas.dantas@gmail.com",
      subject: "Nexus: Confirme seu e-mail",
      text: "Hello world!",
      html: "<button>Confirmar meu e-mail</button>",
    };
    try {
      transporter.sendMail(configEmail);
      console.log("Mensagem enviada ao e-mail do usuário!");
    } catch (error) {
      console.error(error);
    }
  }
}

export default MailService;
