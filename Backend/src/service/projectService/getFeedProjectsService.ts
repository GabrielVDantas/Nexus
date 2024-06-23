import projectRepository from "../../repositories/projectRepository";

class GetFeedProjectsService {
  static async getFeedProjectsService() {
    const projects = projectRepository.find({
      relations: ["coverArt", "screenshots", "categories"],
    });

    return projects;
  }
}

export default GetFeedProjectsService;
