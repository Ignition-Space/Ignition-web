import axios from "axios";

interface Response {
  statusCode: string;
  data: any
}

// 默认请求的baseURL，在这里一般可以写前称
export const baseURL = "/page-table";

const request = axios.create({
  baseURL,
  timeout: 10000,
  withCredentials: true,
});

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')
    config.headers["Authorization"] = "Bearer " + token
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  async (response) => {
    const { data: result = {}, status } = response;

    const { statusCode, data } = result as Response

    if (statusCode === "200") {
      return data
    }

    // 接口异常
    return Promise.reject(result)
  },
  function (error) {
    console.error(`接口请求异常 -> : ${error}`)
    throw error
  }
);

export default request;
