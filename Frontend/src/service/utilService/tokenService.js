
class TokenService {
  static async setToken(token) {
    localStorage.setItem("ACCESS_TOKEN_KEY", token);
  }
}

export default TokenService;
