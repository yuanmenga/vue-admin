import util from "@/utils";
import getAutoRoute from "./autoload";
import getModuleRoute from "./module";
import { RouteRecordRaw } from "vue-router";
let routes: RouteRecordRaw[] = [];
if (util.env.VITE_AUTO_ROUTE) {
  routes = getAutoRoute();
} else {
  routes = getModuleRoute();
}
export default routes;
