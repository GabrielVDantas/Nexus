import TokenService from "../utilService/tokenService";
import baseUrl from "../utilService/urlService";

const token = TokenService.getToken();

class GetUserService {
  static async getUserService() {
    try {
      const response = await baseUrl.get("/profile-user",{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default GetUserService;
