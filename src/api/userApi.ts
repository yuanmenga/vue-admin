import { http } from "../plugins/axios/index";
interface User {
  name: string;
  age: number;
}
function info() {
  return http.request<User>({
    url: "/info",
    method: "get",
  });
}
interface Login {
  token: string;
}
function login(data: any) {
  return http.request<Login>({
    url: "/login",
    method: "post",
    data,
  });
}
export default { info, login };
