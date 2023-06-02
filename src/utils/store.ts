export interface IDate {
  expire?: number;
  [key: string]: any;
}
export default {
  set(key: string, data: IDate): void {
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key: string): IDate | null {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item);
      const expire = data?.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return data;
    }
    return null;
  },
};
