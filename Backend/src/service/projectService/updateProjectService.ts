import { Long } from "typeorm";
import projectRepository from "../../repositories/projectRepository";
import Project from "../../models/Project";
import coverArtRepository from "../../repositories/coverArtRepository";
import CoverArt from "../../models/Images/CoverArt";
import screenshotRepository from "../../repositories/screenshotRepository";
import Screenshot from "../../models/Images/Screenshot";

class UpdateProjectService {
  static async updateProjectService(
    projectId: Long,
    description: string,
    goal: number,
    files: Express.Multer.File[]
  ) {
    const project = await projectRepository.findOneBy({id: projectId}) as Project;

    project.description = description ?? project.description;
    project.goal = goal ?? project.goal;

    const coverArtFile = files.find(
      (file) => file.fieldname === "coverArt"
    ) as Express.Multer.File;
    const coverArtAsBuffer = coverArtFile.buffer;

    const oldConverArt = (await coverArtRepository.findOneBy({
      project: project,
    })) as CoverArt;
    oldConverArt.imageBuffer = coverArtAsBuffer;

    const screenshotFile = files.filter(
      (file) => file.fieldname === "screenshot"
    ) as Express.Multer.File[];
    const screenshotAsBuffer = screenshotFile.map((file) => file.buffer);
    const oldScreenshotFiles = (await screenshotRepository.findBy({
      project: project,
    })) as Screenshot[];
    oldScreenshotFiles.forEach((file, index) => {
      file.imageBuffer = screenshotAsBuffer[index];
    });

    return project;
  }
}

export default UpdateProjectService;
// descrição meta e categorias
