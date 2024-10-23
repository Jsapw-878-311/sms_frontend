export function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
  window.localStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji (str = '') {
  const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
  return str.match(reg) && str.match(reg).length
}

// 单张图片上传
export const uploadImgServer = 'http://43.135.38.246:9595/manage-api/v1/upload/file'
// 多张图片上传
export const uploadImgsServer = 'http://43.135.38.246:9595/manage-api/v1/upload/files'

export const pathMap = {
  login: '登录',
  register: '注册',
  introduce: '用户首页',
  dashboard: '用户首页',
  add: '退出登录',
  swiper: '可选国家',
  charge: '卡密充值',
  info: '使用说明',
  new: '新品上线配置',
  recommend: '为你推荐配置',
  level2: '分类二级管理',
  level3: '分类三级管理',
  chargelist: '充值记录',
  guest: '美国实卡',
  order: '订单管理',
  order_detail: '订单详情',
  account: '修改账户'
}