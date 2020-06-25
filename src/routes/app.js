import Index from "../pages/index";
import Options from "../pages/options";
import Create from "../pages/create_room";
import Join from "../pages/join_room";
import Room from "../pages/room";

var appRoutes = [
  { path: "/", component: Index },
  { path: "/options", component: Options },
  { path: "/create", component: Create },
  { path: "/join", component: Join },
  { path: "/room/:name", component: Room }
];

export default appRoutes;
