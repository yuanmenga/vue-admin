import { ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import parseEnv from "./vite/util";
import setupPlugins from "./vite/plugins";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   //路由别名定义
//   resolve: {
//     alias,
//   },
// });
//自定义vite配置,在执行yarn dev命令时，函数会自动执行
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
    // build: {
    //   rollupOptions: {
    //     emptyOutDir: true,
    //     output: {
    //       manualChunks(id: string) {
    //         if (id.includes("node_modules")) {
    //           return id
    //             .toString()
    //             .split("node_modules/")[1]
    //             .split("/")[0]
    //             .toString();
    //         }
    //       },
    //     },
    //   },
    // },
    // server: {
    //   proxy: {
    //     "/api": {
    //       target: env.VITE_API_URL,
    //       changeOrigin: true,
    //       rewrite: (path: string) => path.replace(/^\/api/, ""),
    //     },
    //   },
    // },
  };
};
