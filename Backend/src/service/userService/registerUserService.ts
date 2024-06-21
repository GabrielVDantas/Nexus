import RegisterUserDTO from "../../dtos/userDtos/registerUserDto";
import userRepository from "../../repositories/userRepository";
import bcrypt from 'bcrypt'
import SendMailService from "../mailService/sendMailService";
import PasswordService from "../passwordService/passwordService";

class RegisterUserService {
  static async registerUserService(registerUserData: RegisterUserDTO) {

    const existingUser = await userRepository.findOne({ where: { email: registerUserData.email } });
    if (existingUser) {
        throw new Error("Já existe um usuário com esse e-mail!");
    }
    const encodedPassword = await PasswordService.encodePassword(registerUserData.password);
    registerUserData.password = encodedPassword;

    const newUser = userRepository.create(registerUserData);
    await userRepository.save(newUser);

    await SendMailService.sendMailService(newUser);

    return {id: newUser.id, username: newUser.username, email: newUser.email, active: newUser.active};
  }

}

export default RegisterUserService;
