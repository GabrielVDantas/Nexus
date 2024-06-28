import PasswordService from "../utilService/passwordService";
import baseUrl from "../utilService/urlService";

class RegisterUserService {
  static async registerUserService(formData) {
    const registerPassword = await PasswordService.comparePassword(
      formData.password,
      formData.confirmPassword
    );

    const response = await baseUrl.post("/register-user", {
      username: formData.username,
      email: formData.email,
      password: registerPassword,
    });

    return response;
  }
}

export default RegisterUserService;
