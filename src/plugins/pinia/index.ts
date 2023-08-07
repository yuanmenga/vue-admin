import { App } from "vue";
import { createPinia } from "pinia";

export default function (app: App) {
  app.use(createPinia());
}
