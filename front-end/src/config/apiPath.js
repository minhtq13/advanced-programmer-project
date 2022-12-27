// export const BASE_URL = "https://61fe8c59a58a4e00173c98cc.mockapi.io";
export const BASE_URL = "http://localhost:8080";

export const apiPath = {
  // Account
  login: BASE_URL + "/api/user/login", // url api login
  register: BASE_URL + "/api/user/signup", // url api register
  // film
  getFilmByNameCinema: BASE_URL + "/film/findByNameCinema",
  getFilmByName: BASE_URL + "/film/findByName?name",
  getInfoCinema: BASE_URL + "/cinema",
  getInfoTickets: BASE_URL + "/tickets",
  getInfoUser: BASE_URL + "/users",
  getInfoFilm: BASE_URL + "/film",
};
