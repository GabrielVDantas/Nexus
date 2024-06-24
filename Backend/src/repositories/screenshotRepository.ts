import { database } from "../config/database";
import Screenshot from "../models/Images/Screenshot";

const screenshotRepository = database.getRepository(Screenshot);

export default screenshotRepository;