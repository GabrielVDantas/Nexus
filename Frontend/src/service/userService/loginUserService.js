import TokenService from "../utilService/tokenService";
import baseUrl from "../utilService/urlService";

class LoginUserService {
  static async loginUserService(email, password) {
    const response = await baseUrl.post("/login-user", {
      email,
      password,
    });

    await TokenService.setToken(response.data.user.token);
    return response;
  }
}

export default LoginUserService;
