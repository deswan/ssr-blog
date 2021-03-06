import axios from 'axios';

axios.defaults.timeout = 10000;

axios.interceptors.response.use((res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }
  return Promise.reject(res);
}, (error) => {
  // 网络异常
  return Promise.reject({message: '网络异常，请刷新重试', err: error});
});

export default axios;