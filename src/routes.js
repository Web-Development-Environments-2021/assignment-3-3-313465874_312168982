import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/currentGames",
    name: "currentGames",
    component: () => import("./pages/CurrentGames")
  },
  {
    path: "/favoriteGamesPage",
    name: "favoriteGamesPage",
    component: () => import("./pages/FavoriteGamesPage")
  },
  {
    path: "/teamPage",
    name: "teamPage",
    component: () => import("./pages/TeamPage")
  },
  {
    path: "/playerPage",
    name: "playerPage",
    component: () => import("./pages/PlayerPage")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/About")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
