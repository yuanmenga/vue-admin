import { http } from "../plugins/axios/index";
export interface User {
  name: string;
  avatar: string;
  age: number;
}
function info() {
  return http.request<User>({
    url: "/user/info",
    method: "get",
  });
}
interface Login {
  token: string;
}
export interface LoginIfrom {
  name: string;
  password: string;
}
function login(data: LoginIfrom) {
  return http.request<Login>({
    url: "/login",
    method: "post",
    data,
  });
}
export default { info, login };
