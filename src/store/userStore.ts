// import { CacheEnum } from "@/enum/CacheEnum";
// import userApi from "@/api/userApi";
// import store from "@/utils/store";
import { defineStore } from "pinia";

export default defineStore("userStore", {
  state: () => {
    return {
      info: {
        name: "ym",
      },
    };
  },
  actions: {
    getUserInfo(data: any) {
      console.log(data, 12);
      this.info = data;
    },
  },
});
