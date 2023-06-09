export interface Imenu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  name?: string;
}
export interface Menu extends Imenu {
  children?: Imenu[];
}
