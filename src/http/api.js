import axios from '../utils/request'

//获取动态路由
const getMenu = (params) => {
  return axios({
    url: 'api/menu/getMenu',
    method: 'get',
    params
  })
}

//登录
const loing = (params) => {
  return axios({
    url: 'api/loing',
    method: 'get',
    params
  })
}


export default {
  getMenu,
  loing
}