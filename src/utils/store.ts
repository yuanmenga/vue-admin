//管理sessionStorage工具

export default {
  set(key: string, data: any, expire?: number): void {
    if (expire) {
      data.expire = new Date().getTime() + expire * 1000
    }
    sessionStorage.setItem(key, JSON.stringify(data))
  },
  get(key: string): any | null {
    const item = sessionStorage.getItem(key)
    if (item) {
      const data = JSON.parse(item)
      const expire = data?.expire
      if (expire && expire < new Date().getTime()) {
        sessionStorage.removeItem(key)
        return null
      }
      return data
    }
    return null
  },
  remove(key: string): void {
    const item = sessionStorage.getItem(key)
    if (item) sessionStorage.removeItem(key)
  },
}
