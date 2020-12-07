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
const login = (params) => {
  return axios({
    url: '/user/login',
    method: 'get',
    params
  })
}


export default {
  getMenu,
  login,
}