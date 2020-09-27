import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //axios拦截器
  instance.interceptors.request.use(config=>{
    // console.log(config);
    //1.config需要修改
    //2.请求动画
    //3.token判断
    return config
  },onRejected => {
    // console.log(onRejected);
  })
  instance.interceptors.response.use(response => {
    // console.log(response);
    return response.data
  },error => {
    console.log(error);
  })

  return instance(config)
}

// export function request(config) {
//   return new Promise((resolve, reject)=>{
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res=>{
//         resolve(res)
//       }).catch(err=>{
//         reject(err)
//     })
//   })
// }

// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config.baseConfig)
//     .then(res=>{
//       config.success(res)
//     }).catch(err=>{
//       config.failure(err)
//   })
// }

// export function request(config,success,failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config)
//     .then(res=>{
//       success(res)
//     }).catch(err=>{
//     failure(err)
//   })
// }
