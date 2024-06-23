import PasswordService from "../utilService/passwordService";
import baseUrl from "../utilService/urlService";

class RegisterUserService {
  static async registerUserService(username, email, password, confirmPassword) {
    const registerPassword = await PasswordService.comparePassword(
      password,
      confirmPassword
    );

    const response = await baseUrl.post("/register-user", {
      username: username,
      email: email,
      password: registerPassword,
    });

    return response;
  }
}

export default RegisterUserService;
