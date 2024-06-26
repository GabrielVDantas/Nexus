import projectRepository from "../../repositories/projectRepository";
import ImageService from "../imageService/imageService";

class GetFeedProjectsService {
  static async getFeedProjectsService() {
    const projects = await projectRepository.find({
      relations: ["coverArt", "screenshots", "categories"],
    });

    console.log(projects);
    

    // const coverArtAsBase64 = projects.map( async(project) => {
    //   await ImageService.convertCoverArtToBase64(project.coverArt.imageBuffer)
    // })

    // console.log(coverArtAsBase64);
    
    
    // const coverArtAsBase64 = projects.map(async project => {
    //   await ImageService.convertCoverArtToBase64(project.coverArt.imageBuffer);
    // })

    // const screenshotsAsBase64 = projects.map(async project => {
    //   await ImageService.convertScreenshotsToBase64(project.screenshots)
    // })

    // const extendedProjects = projects.map(project => {
    //   id: project.id;
    //   name: project.name;
    //   description: project.description;
    //   goal: project.goal;
    //   categories: project.categories
    // })

    // return {extendedProjects, coverArtAsBase64, screenshotsAsBase64}
    return projects;
  }
}

export default GetFeedProjectsService;
