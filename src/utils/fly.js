var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()

// 可配置选项
fly.config = {
  headers: {}, // http请求头，
  baseURL: 'https://easy-mock.com/mock/5b332ae8f384324226646930/zttdev', // 请求基地址
  timeout: 0, // 超时时间，为0时则无超时限制
  // 是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
  parseJson: true,
  withCredentials: false // 跨域时是否发送cookie
}

fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['X-Tag'] = 'flyio'
  // 打印出请求体
  console.log(request.body)
  // 终止请求
  // var err=new Error('xxx')
  // err.request=request
  // return Promise.reject(new Error(''))
  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回
    return response.data
  },
  () => {
  }
)

export default fly
