import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",

  })
  //拦截器
  instance.interceptors.request.use(config => {

    return config     //拦截响应头之后需返回
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {

    return res.data;
  }, err => {
    console.log(err)
  })
  return instance(config)
}
