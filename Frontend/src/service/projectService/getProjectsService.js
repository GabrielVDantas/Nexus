import baseUrl from "../utilService/urlService";

class GetProjectsService {
  static async getFeedProjectsService() {
    try {
      const response = await baseUrl.get("/feed-projects");
      console.log(response.data.projects);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default GetProjectsService;
