//vite-plugins的配置
import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import setupMockPlugin from "./mock";
export default function setupPlugins(
  isBuild: boolean,
  env: Record<string, any>
) {
  const plugins: Plugin[] = [vue()];
  plugins.push(setupMockPlugin(isBuild));
  console.log(plugins, 123);

  return plugins;
}
