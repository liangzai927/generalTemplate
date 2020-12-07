import axios from 'axios'
import { Message } from 'element-ui'

// 创建promise
export default function $axios(options) {
  return new Promise((resolve, reject) => {
    //创建axios
    const server = axios.create({
      // 公共接口
      baseURL: process.env.BASE_API,
      timeout: 3000 //超时时间
    })

    /* request拦截器 */
    server.interceptors.request.use(config => {
      /* 在这里面处理请求前的数据 */
      config.data = JSON.stringify(config.data) //数据转换
      //处理请求头
      config.header = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      /* 这里可以给请求头添加token 需要的自己处理 一般储存在vuex里面 */
      return config
    }, err => {
      Promise.reject(err)
    })

    /* response拦截器 */
    server.interceptors.response.use(response => {
      // 处理接收到响应的数据
      response => {
        let data
        if (response.data == undefined) data = response.request.responseText
        else data = response.data

        // 根据返回的code值来做不同的处理（和后端约定）
        // switch (data.code) {
        //   case '':
        //     break;
        //   default:
        // }
        return data
      }
    }, err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break

          case 401:
            err.message = '未授权，请登录'
            // router.push({
            //   name: 'login'
            // })
            break

          case 403:
            err.message = '拒绝访问'
            break

          case 404:
            err.message = `请求地址出错: ${err.response.config.url}`
            break

          case 408:
            err.message = '请求超时'
            break

          case 500:
            err.message = '服务器内部错误'
            break

          case 501:
            err.message = '服务未实现'
            break

          case 502:
            err.message = '网关错误'
            break

          case 503:
            err.message = '服务不可用'
            break

          case 504:
            err.message = '网关超时'
            break

          case 505:
            err.message = 'HTTP版本不受支持'
            break

          default:
        }
      }
      console.error(err)
      // 此处我使用的是 element UI 的提示组件
      Message.error(`ERROR: ${err}`);
      return Promise.reject(err) // 返回接口返回的错误信息
    })

    //请求处理
    server(options)
      .then((res) => {
        resolve(res)
        return false
      })
      .catch((error) => {
        reject(error)
      })
  })
}



