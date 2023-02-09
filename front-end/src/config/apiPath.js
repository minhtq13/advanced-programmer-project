// export const BASE_URL = "https://61fe8c59a58a4e00173c98cc.mockapi.io";
export const BASE_URL = "http://localhost:8080";

export const apiPath = {
  // Account
  login: BASE_URL + "/auth/login", // url api login
  getUser: BASE_URL + "/users/findByUsernameAndPassword",
  register: BASE_URL + "/api/user/signup", // url api register
  // Film
  getFilmByNameCinema: BASE_URL + "/film/findByNameCinema",
  getFilmByNameFilm: BASE_URL + "/film/findByName",

  getInfoFilm: BASE_URL + "/film",
  addFilm: BASE_URL + "/film/add-film",
  updateFilm: BASE_URL + "/film/update-film",
  deleteFilm: BASE_URL + "/film/delete-film",

  // Schedule
  getInfoAllSchedule: BASE_URL + "/schedule",
  getInfoSchedule: BASE_URL + "/schedule/findByNameCinemaAndDay",
  getInfoScheduleByNameCinema: BASE_URL + "/schedule/findByNameCinema",

  // Cinema
  getAllInfoCinema: BASE_URL + "/cinema",
  getInfoCinema: BASE_URL + "/cinema/findByName",

  // User
  getInfoUser: BASE_URL + "/users",

  //Ticket
  getInfoTickets: BASE_URL + "/tickets",
};
