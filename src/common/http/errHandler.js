/**
 * Created by zhouzhigang on 2017/8/11.
 *
 * 处理异常异常情况。
 */
function errHandler () {

  let ERRORS;

// 获取异常信息
  this.getErrorMsg = err => {

    return 'errMsg'
  }

  this.initErrorCode = errCode => {
    this.ERRORS = errCode;
  }
}

export default errHandler
