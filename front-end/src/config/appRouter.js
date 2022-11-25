import Cinemas from "../pages/Cinemas";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Member from "../pages/Member/Member";
import Movie from "../pages/Movie";
import Price from "../pages/Price";
import Schedule from "../pages/Schedule";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/price", component: Price },
  { path: "/schedule", component: Schedule },
  { path: "/movie", component: Movie },
  { path: "/cinemas", component: Cinemas },
  { path: "/member", component: Member },
  { path: "/login", component: Login, layout: null },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
