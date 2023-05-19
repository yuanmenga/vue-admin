import { ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import { parseEnv } from "./vite/util";
import setupPlugins from "./vite/plugins";
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   //路由别名定义
//   resolve: {
//     alias,
//   },
// });
//更改vite配置,在执行yarn dev命令时，会在终端输出下面代码的打印内容
export default ({ command, mode }: ConfigEnv) => {
  console.log(command, mode); //command：生产环节/编译环节  mode：模式
  const isBuild = command === "build";
  //获取.env文件的配置项,并将env文件的配置项转换成相应的数据类型（正常都解析为字符串）
  const env = parseEnv(loadEnv(mode, "."));
  return {
    // plugins: [vue()],
    plugins: setupPlugins(isBuild, env),
    //路由别名定义
    resolve: {
      alias,
    },
  };
};
