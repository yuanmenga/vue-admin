import { createApp } from "vue";
import "@/style.css";
import App from "./App.vue";
import { setupRouter } from "./router";

function createInstance() {
  const app = createApp(App);
  setupRouter(app); //注册路由
  app.mount("#app");
}
createInstance(); //创建Vue实例
