import userRepository from "../../repositories/userRepository";
import SendMailService from "../mailService/sendMailService";
import PasswordService from "../passwordService/passwordService";

class RegisterUserService {
  static async registerUserService(username: string, email: string, password: string) {

    const existingUser = await userRepository.findOne({ where: {email} });
    if (existingUser) {
        throw new Error("Já existe um usuário com esse e-mail!");
    }
    const encodedPassword = await PasswordService.encodePassword(password);
    password = encodedPassword;

    const newUser = userRepository.create({username, email, password});
    await userRepository.save(newUser);

    await SendMailService.sendMailService(newUser);

    return {id: newUser.id, username: newUser.username, email: newUser.email, active: newUser.active};
  }

}

export default RegisterUserService;
