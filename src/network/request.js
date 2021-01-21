import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    //baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })

  //axios拦截器
  // instance.interceptors.request.use(config => {

  // }), err => {

  // }


  //发送网络请求
  return instance(config)
}