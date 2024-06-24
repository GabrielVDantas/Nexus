import { Router } from "express";
import GeetFeedProjectsController from "../controllers/projectController/getFeedProjectsController";
import NewProjectController from "../controllers/projectController/newProjectController";

const projectRoutes = Router();

projectRoutes.get(
  "/feed-projects",
  GeetFeedProjectsController.geetFeedProjectsController
);

projectRoutes.post("/new-project", NewProjectController.newProjectController)

export default projectRoutes;