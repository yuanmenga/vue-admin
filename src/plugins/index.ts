import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss/index";
import _ from "lodash";
export function setupPlugins(app: App) {
  setupTailwindcss();
  autoRegisterComponent(app);
}
//自动注册全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.globEager("../components/hd/*.vue");
  Object.entries(components).forEach(([key, value]) => {
    const componentName = `Hd${key.split("/").pop()?.split(".")[0]}`;
    console.log(componentName);
    app.component(componentName, value.default);
  });
}
