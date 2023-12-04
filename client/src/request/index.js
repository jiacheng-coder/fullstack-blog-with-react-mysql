import axios from 'axios'

// 创建一个 Axios 实例
const apiInstance = axios.create({
  // baseURL: 'https://api.example.com', // 你的API的基本URL
  timeout: 10000, // 请求超时时间
})

// 请求拦截器
apiInstance.interceptors.request.use(
  config => {
    // 在请求发送之前可以进行一些操作，比如添加token等
    // config.headers.Authorization = `Bearer ${token}`;
    return config
  },
  error => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
apiInstance.interceptors.response.use(
  response => {
    // 在响应数据之前可以进行一些操作
    return response.data
  },
  error => {
    // 处理响应错误
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.error('Response Error:', error.response.status)
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('No Response Received:', error.request)
    } else {
      // 其他错误
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

// 封装GET请求
export const GET = (url, params) => {
  return apiInstance.get(url, { params })
}

// 封装POST请求
export const POST = (url, data) => {
  return apiInstance.post(url, data)
}

// 其他请求方式可依此类推...

// 导出 axios 实例
export default apiInstance
