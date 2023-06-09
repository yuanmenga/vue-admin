import { App } from "vue";
import { createPinia } from "pinia";
export default function setupPinia(app: App) {
  console.log(app);
  app.use(createPinia());
}
