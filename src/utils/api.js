import axios from "axios";

const API_URL = "http://localhost:5123/";

/* 
    INSTRUCTION: 
    - Create a function to fetch pokemons from the API. 
    - API call may include query parameters for search and type.
*/
export async function fetchPokemons(type, search) {
  const response = await axios.get(
    API_URL +
      "pokemons?type=" +
      (type === "all" ? "" : type) +
      (search === "" ? "" : "&search=" + search)
  );
  console.log(
    API_URL +
      "pokemons" +
      (type === "all" ? "" : "?type=" + type) +
      (search === "" ? "" : "&search=" + search)
  );
  return response.data;
}

/* INSTRUCTION: Create a function to fetch types from the API. */
export async function fetchTypes() {
  const response = await axios.get(API_URL + "types");
  return response.data;
}
