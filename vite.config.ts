import { ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import setupPlugins from "./vite/plugins";
import parseEnv from "./vite/util";
import { visualizer } from "rollup-plugin-visualizer";

export default ({ command, mode }: ConfigEnv) => {
  console.log(command, mode); //command：生产环节/编译环节  mode：模式
  const isBuild = command === "build";
  //获取.env文件的配置项,并将env文件的配置项转换成相应的数据类型（正常都解析为字符串）
  const env = parseEnv(loadEnv(mode, "."));
  return {
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    //定义别名
    resolve: {
      alias,
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  };
};
