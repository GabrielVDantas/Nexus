import { database } from "../config/database";
import CoverArt from "../models/Images/CoverArt";

const coverArtRepository = database.getRepository(CoverArt);

export default coverArtRepository;
