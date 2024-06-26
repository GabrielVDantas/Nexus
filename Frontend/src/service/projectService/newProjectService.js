import baseUrl from "../utilService/urlService";

class NewProjectService {
  static async newProjectService(name, description, goal) {
    try {
      const response = await baseUrl.post("/new-project", {
        name: name,
        description: description,
        goal: goal,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default NewProjectService;
