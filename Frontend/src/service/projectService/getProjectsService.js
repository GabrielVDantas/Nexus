import baseUrl from "../utilService/urlService";

class GetProjectsService {
  static async getFeedProjectsService() {
    try {
      const response = await baseUrl.get("/feed-projects");
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  static async getProjectInformationService(projectId) {
    try {
      const response = await baseUrl.get(`/project-information/${projectId}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default GetProjectsService;
