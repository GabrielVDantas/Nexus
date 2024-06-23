class PasswordService {
  static async comparePassword(password, confirmPassword) {
    if (!password === confirmPassword) {
      throw new Error("As senhas não batem");
    }
    return password;
  }
}

export default PasswordService;
