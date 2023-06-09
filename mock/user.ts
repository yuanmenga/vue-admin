// {
//     // 请求地址
//     url: string;
//     // 请求方式
//     method?: MethodType;
//     // 设置超时时间
//     timeout?: number;
//     // 状态吗
//     statusCode?:number;
//     // 响应数据（JSON）
//     response?: ((opt: { [key: string]: string; body: Record<string,any>; query:  Record<string,any>, headers: Record<string, any>; }) => any) | any;
//     // 响应（非JSON）
//     rawResponse?: (req: IncomingMessage, res: ServerResponse) => void;
//   }
import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/user/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请示成功",
        status: "success",
        data: {
          name: "admin",
          age: 18,
          avatar: "/images/xj.jpg",
          // permissions: ["article_edit", "markdown_editor", "base_editor"],
        },
      };
    },
  },
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "登录成功",
        status: "success",
        data: {
          token: Random.string(10),
        },
      };
    },
  },
] as MockMethod[];
