import PasswordService from "../passwordService/passwordService";
import baseUrl from "../urlService/urlService";

class RegisterUserService {
  static async registerUserService(username, email, password, confirmPassword) {
    const registerPassword = await PasswordService.comparePassword(
      password,
      confirmPassword
    );

    const response = await baseUrl.post("/register-user", {
      username,
      email,
      registerPassword,
    });

    return response;
  }
}

export default RegisterUserService;
