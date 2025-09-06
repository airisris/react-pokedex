import axios from "axios";

const API_URL = "http://localhost:5123/";

/* 
    INSTRUCTION: 
    - Create a function to fetch pokemons from the API. 
    - API call may include query parameters for search and type.
*/
export async function fetchPokemons(type, search) {
  let url = API_URL + "pokemons";
  if (type !== "all" && search !== "") {
    url += "?type=" + type + "&search=" + search;
  } else if (type !== "all") {
    url += "?type=" + type;
  } else if (search !== "") {
    url += "?search=" + search;
  }

  const response = await axios.get(url);
  console.log(url);
  return response.data;
}

/* INSTRUCTION: Create a function to fetch types from the API. */
export async function fetchTypes() {
  const response = await axios.get(API_URL + "types");
  return response.data;
}
