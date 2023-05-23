import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss/index";
import _ from "lodash";
export function setupPlugins(app: App) {
  setupTailwindcss();
  autoRegisterComponent(app);
}
//自动注册全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.globEager("../components/form/*.vue");
  Object.entries(components).forEach(([key, value]) => {
    const componentName = key.split("/").pop()?.split(".")[0] as string;
    const name = capitalizeFirstLetter(_.camelCase(componentName));
    app.component(name, value.default);
  });
  //转换首字母大写
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
