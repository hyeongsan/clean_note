import Login from "./pages/Login.js";
import Join from "./pages/join.js";
import Home from "./pages/home.js";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/login/:id",
    component: Login,
  },
  {
    path: "/join",
    component: Join,
  },
  {
    path: "/join/:id",
    component: Join,
  },
];
