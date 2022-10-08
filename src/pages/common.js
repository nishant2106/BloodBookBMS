import axios from "axios";

export default axios.create({
  baseURL: "https://bloodbookserver.onrender.com/",
  headers: {
    "Content-type": "application/json",
  },
});
