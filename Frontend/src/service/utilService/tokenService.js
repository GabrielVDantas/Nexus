class TokenService {
  static async setToken(token) {
    localStorage.setItem("ACCESS_TOKEN_KEY", token);
  }

  static getToken() {
    localStorage.getItem("ACCESS_TOKEN_KEY");
  }
}

export default TokenService;
