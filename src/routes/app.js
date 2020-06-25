import Index from "../pages/index";
import Options from "../pages/options";
import Create from "../pages/create_room";
import Join from "../pages/join_room";

var appRoutes = [
  { path: "/", name: "Index", component: Index, exact: true },
  { path: "/options", name: "Index", component: Options, exact: true },
  { path: "/create", name: "Index", component: Create, exact: true },
  { path: "/join", name: "Index", component: Join, exact: true }
];

export default appRoutes;
