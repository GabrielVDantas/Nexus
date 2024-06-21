import { Router } from "express";
import MailController from "../controllers/mailController/mailController";

const mailRoutes = Router();

mailRoutes.get(
  "/confirm-user-email/:token",
  MailController.mailController
);

export default mailRoutes;