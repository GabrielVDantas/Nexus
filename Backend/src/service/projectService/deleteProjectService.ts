import { Long } from "typeorm";
import projectRepository from "../../repositories/projectRepository";
import coverArtRepository from "../../repositories/coverArtRepository";
import CoverArt from "../../models/Images/CoverArt";
import Project from "../../models/Project";
import screenshotRepository from "../../repositories/screenshotRepository";
import Screenshot from "../../models/Images/Screenshot";

class DeleteProjectService {
    static async deleteProjectService(projectId: Long) {
        const project = await projectRepository.findOneBy({id: projectId}) as Project;

        const coverArt = await coverArtRepository.findOneBy({project}) as CoverArt;
        coverArtRepository.delete(coverArt);

        const screenshots = await screenshotRepository.findBy({project}) as Screenshot[];
        screenshots.forEach(file => screenshotRepository.delete(file));

        await projectRepository.delete(project);
    }
}

export default DeleteProjectService;