import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../models/User";
import projectRepository from "../../repositories/projectRepository";
import coverArtRepository from "../../repositories/coverArtRepository";
import screenshotRepository from "../../repositories/screenshotRepository";
import categoryRepository from "../../repositories/categoryRepository";
import Category from "../../models/Category";

class NewProjectService {
  static async newProjectService(name: string, description: string, goal: number) {
    // const user = (await userRepository.findOneBy({ id: userId })) as User;

    const project = projectRepository.create({
      name, description, goal
    });

    await projectRepository.save(project);

    // const coverArtFile = files.find(file => file.fieldname === 'coverArt') as Express.Multer.File;
    // const coverArtAsBuffer = coverArtFile.buffer;

    // const coverArt = coverArtRepository.create({imageBuffer: coverArtAsBuffer, project: project})

    // await coverArtRepository.save(coverArt);

    // const screenshotFiles = files.filter(file => file.filename === 'screenshots') as Express.Multer.File[];
    // const screenshotAsBuffer = screenshotFiles.map((screenshotFile) => screenshotFile.buffer);
    // screenshotAsBuffer.forEach( async(buffer) => {
    //   const screenshot = screenshotRepository.create({imageBuffer: buffer, project: project});
    //   await screenshotRepository.save(screenshot);
    // })

    // newProjectData.categories.forEach(async (category) => {
    //   const existingCategory = await categoryRepository.findOne({
    //     where: { name: category },
    //   }) as Category;
    //   existingCategory.projects.push(project);
    //   await categoryRepository.save(existingCategory);
    // });

    return project;
  }
}
export default NewProjectService;
