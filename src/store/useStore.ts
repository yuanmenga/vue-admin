import userApi, { User } from "@/api/userApi";
import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      info: {} as null | User,
    };
  },
  actions: {
    async getUserInfo() {
      let { data } = await userApi.info();
      this.info = data;
    },
  },
});
