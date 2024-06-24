import { Long } from "typeorm";
import NewProjectDTO from "../../dtos/projectDtos/newProjectDto";
import userRepository from "../../repositories/userRepository";
import User from "../../models/User";
import projectRepository from "../../repositories/projectRepository";
import coverArtRepository from "../../repositories/coverArtRepository";
import screenshotRepository from "../../repositories/screenshotRepository";
import categoryRepository from "../../repositories/categoryRepository";
import Category from "../../models/Category";

class NewProjectService {
  static async newProjectService(userId: Long, newProjectData: NewProjectDTO) {
    const user = (await userRepository.findOneBy({ id: userId })) as User;

    const project = projectRepository.create({
      name: newProjectData.name,
      description: newProjectData.description,
      goal: newProjectData.goal,
      user: user,
    });

    await projectRepository.save(project);

    const coverArt = coverArtRepository.create({
      imageBuffer: newProjectData.coverArt,
      project: project,
    });

    await coverArtRepository.save(coverArt);

    newProjectData.screenshots.forEach(async(projectScreenshot) => {
      const screenshot = screenshotRepository.create({
        imageBuffer: projectScreenshot,
        project: project,
      });
      await screenshotRepository.save(screenshot);
    });

    newProjectData.categories.forEach(async (category) => {
      const existingCategory = await categoryRepository.findOne({
        where: { name: category },
      }) as Category;
      existingCategory.projects.push(project);
      await categoryRepository.save(existingCategory);
    });

    return project;
  }
}
export default NewProjectService;
