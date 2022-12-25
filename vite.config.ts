import { ConfigEnv, defineConfig, loadEnv } from "vite";

import path from "path";
import parseEnv from "./vite/utils";
import { setupPlugins } from "./vite/plugins";

//在执行yarn dev命令时执行此处代码
export default ({ command, mode }: ConfigEnv) => {
  console.log(command); //serve 运行模式
  console.log(mode); //development 开发阶段
  const isBuild = command == "build";

  //获取到配置项,获取的都是字符串解构，需要进行解析
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  // 路由别名定义
  return {
    plugins: setupPlugins(isBuild, env),
    // 路由别名定义
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
};
