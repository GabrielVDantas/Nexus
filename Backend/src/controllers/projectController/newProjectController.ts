import { Request, Response } from "express";
import { Long } from "typeorm";
import NewProjectService from "../../service/projectService/newProjectService";

class NewProjectController {
  static async newProjectController(req: Request, res: Response) {
    const userId = req.user.id as Long;
    const newProjectData = req.newProjectDTO;

    try {
      const newProject = await NewProjectService.newProjectService(
        userId,
        newProjectData
      );
      return res
        .status(201)
        .json({
          message: "Projeto será criado com sucesso!",
          project: newProject,
        });
    } catch (error) {
      return res.status(500).json({
        message: "Algo deu errado, projeto não será criado!",
        error: error,
      });
    }
  }
}

export default NewProjectController;
