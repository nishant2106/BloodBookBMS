import axios from "axios";

export default axios.create({
  baseURL: "http://bloodbookserver-production.up.railway.app/",
  headers: {
    "Content-type": "application/json",
  },
});
