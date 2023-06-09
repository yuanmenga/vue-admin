//token 管理工具

export default {
  set(key: string, data: any, expire?: number): void {
    console.log(data, expire);

    if (expire) {
      data.expire = new Date().getTime() + expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key: string): any | null {
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
  remove(key: string): void {
    const item = localStorage.getItem(key);
    if (item) localStorage.removeItem(key);
  },
};
