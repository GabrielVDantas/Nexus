import nodemailer from "nodemailer";
import User from "../../models/User";
import TokenService from "./tokenService";
import userRepository from "../../repositories/userRepository";

class MailService {
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
      html: `<!DOCTYPE html>
              <html lang="pt-br">

              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Confirmação de e-mail</title>
                  <style>
                      :root {
                          --color-1: #090a0c;
                          --color-2: #fd0027;
                          --color-3: #babbbc;
                          --button-border: 2px solid var(--color-2);
                          --border-radius: 50px;
                      }

                      * {
                          font-family: "Roboto", sans-serif;
                          box-sizing: border-box;
                          margin: 0;
                          padding: 0;
                      }

                      body {
                          height: 80vh;
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          text-align: center;
                          justify-content: center;
                          margin: 32px;
                          background-color: var(--color-1);
                      }

                      img {
                          max-width: 300px;
                          margin-bottom: 3rem;
                      }

                      h2 {
                          color: var(--color-3);
                          font-size: 32px;
                          font-weight: 500;
                      }

                      p {
                          color: var(--color-3);
                          font-size: 18px;
                          font-weight: 300;
                          margin: 0.25rem 0;
                      }

                      a {
                          margin: 1rem 0
                      }

                      a,
                      button {
                          text-decoration: none;
                          cursor: pointer;
                          background-color: transparent;
                          border-radius: var(--border-radius);
                          border: var(--button-border);
                          color: var(--color-2);
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          text-align: center;
                          justify-content: center;
                          width: 136px;
                          height: 36px;
                          font-size: 12px;
                          padding: 0 20px;
                      }

                      a:hover,
                      button:hover {
                          transform: scale(1.1);
                          background-color: var(--color-2);
                          color: var(--color-1);
                      }
                  </style>
              </head>

              <body>
                  <h1><img src="/src/assets/logo.png" alt=""></h1>
                  <h2>Falta só mais uma coisa...</h2>
                  <p>Obrigado por estar conosco! Clique no botão abaixo para confirmar seu e-mail!</p>
                  <a href="http://localhost:4000/confirm-user-email/${token}"><button>Confirmar meu e-mail</button></a>

                  <p>Você não poderá ter acesso à plataforma até que seu e-mail seja confirmado</p>
                  <p>Se você não se cadastrou recentemente no Nexus, por favor, ignore esse e-mail</p>
              </body>

              </html>`,
    };
    try {
      transporter.sendMail(configEmail);
      console.log("Mensagem enviada ao e-mail do usuário!");
    } catch (error) {
      console.error(error);
    }
  }

  static async validateMailByToken(token: string) {
    const id = await TokenService.verifyToken(token);

    const user = (await userRepository.findOneBy({ id })) as User;

    user.active = true;
    await userRepository.save(user);

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      active: user.active,
    };
  }
}

export default MailService;
