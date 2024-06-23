import { Router } from "express";
import GeetFeedProjectsController from "../controllers/projectController/getFeedProjectsController";

const projectRoutes = Router();

projectRoutes.get(
  "/feed-projects",
  GeetFeedProjectsController.geetFeedProjectsController
);

export default projectRoutes;