import axios from "axios";
const API_KEY = "55660188-792f1fef602df37d72b3dd925";

export function getImagesByQuery(query) {
  return axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(res => res.data);
}