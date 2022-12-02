import Cinemas from "../pages/Cinemas/Cinemas";
import Home from "../pages/Home/Home";
import Account from "../pages/Login/Account";
import Member from "../pages/Member/Member";
import Movie from "../pages/Movie";
import MovieChair from "../pages/MovieChair/MovieChair";
import Price from "../pages/Price";
import Schedule from "../pages/Schedule/Schedule";

const publicRoutes = [
  { path: "/", component: Home, layout: "HomePageLayout" },
  { path: "/home", component: Home, layout: "HomePageLayout" },
  { path: "/price", component: Price },
  { path: "/schedule", component: Schedule },
  { path: "/movie", component: Movie },
  { path: "/cinemas", component: Cinemas },
  { path: "/member", component: Member },
  { path: "/login", component: Account },
  // private routes
  { path: "/movie-chair", component: MovieChair },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
