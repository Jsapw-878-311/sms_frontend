export default {
  development: {
    baseUrl: '/api' // 测试接口域名
  },
  beta: {
    baseUrl: '//43.135.38.246:9595/api/v1', // 测试接口域名
    assetsPublicPath: './'
  },
  release: {
    baseUrl: '//43.135.38.246:9595/api/v1', // 正式接口域名
    assetsPublicPath: './'
  }
}