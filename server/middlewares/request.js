// 包装一层axios，留给以后扩展用
const axios = require('axios')
const _ = require('lodash')
const querystring = require('querystring')
const http = require('http')
const errorGenerator = require('middlewares/errorGenerator')

const httpAgent = new http.Agent({ keepAlive: true })

const createRequest = axios => (
    defaultAxiosConfig = {}
) => {
    if (typeof defaultAxiosConfig !== 'function' && typeof defaultAxiosConfig !== 'object') {
        throw new Error('参数异常：defaultAxiosOptions must be a object or function')
    }

    return async (ctx, next) => {
        const axiosConfig = _.cloneDeep(
            typeof defaultAxiosConfig === 'function' ? defaultAxiosConfig(ctx) : defaultAxiosConfig
        )
        delete axiosConfig.data

        // 设置 axios 的默认配置
        const instance = axios.create(
            Object.assign(
                {
                    tracer: false,
                    httpAgent,
                    paramsSerializer: function(params) {
                        return querystring.stringify(params)
                    }
                },
                axiosConfig
            )
        )

        ctx.axios = instance

      // 记录返回信息
      instance.interceptors.response.use(
        res => {
          return res
        },
        err => {
          let error = parseError(err)
          if (error.status === 401) {
            delete ctx.session.user;
          }
          return Promise.reject(error)
        }
      )

        await next()
    }
}

// 序列化 error
function parseError(err) {
  let error
  if (err.code && err.code === 'ECONNABORTED') {
    error = errorGenerator.responseTimeout(err)
    return error
  }

  if (err.response) {
    const { status, data, statusText } = err.response
    // data 为对象
    let message
    if (data && data.error) {
      message = data.error
    } else {
      message = statusText
    }
    error = new Error(message)
    // 如果 data 是个对象的话把 data 信息都放到 error 里
    // 不仅仅局限于 code
    _.isObject(data) && _.merge(error, data)
    error.status = status
    error = errorGenerator.responseError(error)
    return error
  }

  // 兜底方案
  error = errorGenerator.responseError(err)
  return error
}

module.exports = createRequest(axios)
