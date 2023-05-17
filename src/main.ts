import { createApp } from "vue";
import "@/style.css";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupPlugins } from "./plugins";

function createInstance() {
  const app = createApp(App);
  setupRouter(app); //注册路由
  setupPlugins(app); //注册插件
  app.mount("#app");
}
createInstance(); //创建Vue实例
