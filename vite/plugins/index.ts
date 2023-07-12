//vite-plugins的配置
import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import setupMockPlugin from "./mock";
// import autoImport from "./autoImport";
export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()];
  plugins.push(setupMockPlugin(isBuild)); //注册mockjs
  // autoImport(plugins);//注册自动
  return plugins;
}
