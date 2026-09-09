import axios from "axios";

// json-server --watch db.json
export const api = axios.create({
  baseURL: "/", // Base url, é a url que nunca mudará
});
