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
export default { info };
