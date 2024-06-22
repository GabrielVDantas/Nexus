import axios from "axios";

const baseUrl = axios.create({baseURL: "http://localhost:4000"});

export default baseUrl;