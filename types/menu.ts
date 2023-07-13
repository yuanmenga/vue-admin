import { IconType } from "@icon-park/vue-next/es/all";

export interface IMenu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  name?: string;
}

export interface Menu extends IMenu {
  children?: IMenu[];
}
