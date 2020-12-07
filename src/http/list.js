import axios from '../utils/request'

//获取动态路由
const aaa = (params) => {
  return axios({
    url: 'api/menu/getMenu',
    method: 'get',
    params
  })
}


export default {
  aaa
}