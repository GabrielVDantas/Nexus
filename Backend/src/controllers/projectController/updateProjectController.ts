import { Request, Response } from "express";
import UpdateProjectService from "../../service/projectService/updateProjectService";

class UpdateProjectController {
  static async updateProjectController(req: Request, res: Response) {
    const projectId = req.params.projectId as any;
    const { description, goal } = req.body;
    const files = req.files as Express.Multer.File[];

    try {
      const project = await UpdateProjectService.updateProjectService(
        projectId,
        description,
        goal,
        files
      );
      return res.json({
        message: "Projeto atualizado com sucesso!",
        project: project,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, projeto não será atualizado!",
        error: error,
      });
    }
  }
}

export default UpdateProjectController;
