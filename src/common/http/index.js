/**
 * Created by zhouzhigang on 2017/8/11.
 *
 * http 请求封装
 */
import Axios from 'axios'
import adaptRestApi from './restAPI.adapter'
import errHandler from './errHandler'

// 在实例已创建后修改默认值
// Axios.defaults.headers.common['token-auth'] = window.localStorage.token;

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 处理参数：1.API转化为restful风格。
  config.url = adaptRestApi(config.url, config.pathValues);

  // 2. 处理发送请求的数据，类似前后空格。只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  config.transformRequest = [function (data) {
    // 处理数据逻辑

    return null;
  }]

  // 设置自定义header，下面设置鉴权token。因为中间用 中划线'-' ，所以要用分号包围
  config.headers = {'token-auth': window.localStorage.token}

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 设置更新token

  return response;
}, function (error) {
  // 获取异常信息
  errHandler.getErrorMsg(error);
  return Promise.reject(error);
});

// 先初始化errCode，与业务解耦
Axios.prototype.initErrorCode = function (errCode) {
  errHandler.initErrorCode(errCode)
}

export default Axios
