import bcrypt from 'bcrypt'

class PasswordService {
    static async encodePassword(password: string) {
        return await bcrypt.hash(password, 10);
    }

    static async compareCodedPasswords(password: string, encodedPassword: string) {
        return await bcrypt.compare(password, encodedPassword);
    }
}

export default PasswordService;