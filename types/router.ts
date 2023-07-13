import { Menu } from "#/menu";
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    auth?: boolean;
    guest?: boolean;
    menu?: Menu;
    enterClass?: string;
    leaveClass?: string;
    permission?: string;
  }
}
