import { CacheEnum } from '@/enum/CacheEnum'
import userApi, { User } from '@/api/userApi'
import store from '@/utils/store'
import { defineStore } from 'pinia'

export default defineStore('userStore', {
  state: () => {
    return {
      info: {} as null | User,
    }
  },
  actions: {
    async getUserInfo() {
      if (store.get(CacheEnum.TOKEN)) {
        const res = await userApi.info()
        this.info = res.data as User
      }
    },
  },
})
