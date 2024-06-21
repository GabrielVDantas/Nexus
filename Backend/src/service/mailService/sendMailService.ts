import nodemailer from "nodemailer";
import User from "../../models/User";
import TokenService from "../tokenService/tokenService";

class SendMailService {
  static async sendMailService(user: User) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER as string,
        pass: process.env.MAIL_PASS as string,
      },
    });
    const token = await TokenService.generateToken(user);
    const configEmail = {
      from: process.env.MAIL_USER as string,
      to: user.email,
      subject: "Nexus: Confirme seu e-mail",
      text: "Hello world!",
      html: `<a href="http://localhost:4000/confirm-user-email/${token}"><button>Confirmar meu e-mail</button></a>`,
    };
    try {
      transporter.sendMail(configEmail);
      console.log("Mensagem enviada ao e-mail do usuário!");
    } catch (error) {
      console.error(error);
    }
  }
}

export default SendMailService;
