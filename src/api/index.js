/**
 * Created by zhouzhigang on 2017/8/11.
 */
import Axios from '../common/http/index'
import errCode from './errors.json'

// 初始化接口异常返回码配置
Axios.initErrorCode(errCode);

export default Axios
