import axios, { AxiosRequestConfig } from "axios";
export default class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }
  public async request<T, D = ResponseRedult<T>>(
    config: AxiosRequestConfig
  ): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }
  private interceptors() {
    this.interceptorRequest();
    this.interceptorResponse();
  }
  //添加请求拦截器
  private interceptorRequest() {
    this.instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
  }
  // 添加响应拦截器
  private interceptorResponse() {
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }
}
