import axios from "axios";

export default axios.create({
  baseUrl: "https://translation.googleapis.com/language/translate/v2",
});
