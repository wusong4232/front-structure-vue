/**
 * Created by zhouzhigang on 2017/8/11.
 * 只负责将 axios 封装成rest风格
 */
let adaptRestApi = (url, pathValues) => {

  return url + pathValues;
}

export default adaptRestApi
