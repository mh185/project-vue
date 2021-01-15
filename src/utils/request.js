import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import { getToken } from "@/utils/auth"

// create an axios instance
const service = axios.create({
  baseURL: "http://127.0.0.1:8888/api/private/v1/", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const token = getToken()
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const {
      data,
      meta
    } = response.data
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (meta.status !== 200) {
      Message({
        message: meta.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    } else if (meta.status === 200) {
      return res
    }
  },
  error => {
    console.log('err', error) // for debug
    if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
      Message({
        message: '连接超时,请稍后重试！',
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
