import Cinemas from "../pages/Cinemas/Cinemas";
import DetailFilm from "../pages/DetailFilm/DetailFilm";
import Home from "../pages/Home/Home";
import Account from "../pages/Login/Account";
import Member from "../pages/Member/Member";
import Movie from "../pages/Movie";
import MovieChair from "../pages/MovieChair/MovieChair";
import NotFound from "../pages/NotFound";
import Price from "../pages/Price";
import Schedule from "../pages/Schedule/Schedule";
import { appPath } from "./appPath";

const publicRoutes = [
  { path: appPath.notFound, component: NotFound },
  { path: appPath.default, component: Home, layout: "HomePageLayout" },
  { path: ":id" + appPath.home, component: Home, layout: "HomePageLayout" },
  { path: ":id" + appPath.price, component: Price },
  { path: ":id" + appPath.schedule, component: Schedule },
  { path: ":id" + appPath.movie, component: Movie },
  { path: ":id" + appPath.cinemas, component: Cinemas },
  { path: ":id" + appPath.member, component: Member },
  { path: ":id" + appPath.login, component: Account },
  { path: ":id" + appPath.detailFilm, component: DetailFilm },

  // private routes
  {
    path: ":id" + appPath.movieChair,
    component: MovieChair,
    isPrivateRouter: true,
  },

  // { path: appPath.movieChair, component: MovieChair },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
