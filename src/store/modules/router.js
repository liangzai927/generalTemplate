import { asyncRouterHandle } from '@/utils/asyncRouter'

const data = [
  {
    CreatedAt: "2020-05-20T17:34:24+08:00",
    DeletedAt: null,
    ID: 0,
    UpdatedAt: "2020-06-08T16:34:23+08:00",
    authoritys: null,
    children: null,
    component: "views/firstPage/firstPage.vue",
    hidden: false,
    menuId: "52",
    meta: { keepAlive: false, defaultMenu: false, title: "首页", icon: "s-home" },
    defaultMenu: false,
    icon: "s-home",
    keepAlive: false,
    title: "首页",
    name: "home",
    parentId: "0",
    path: "home",
    sort: 1,
    systemkey: "",
    systemname: ""
  },
  {
    CreatedAt: "2020-06-01T09:50:58+08:00",
    DeletedAt: null,
    ID: 0,
    UpdatedAt: "2020-06-08T16:34:48+08:00",
    authoritys: null,
    children: [{
      CreatedAt: "2020-06-02T09:26:48+08:00",
      DeletedAt: null,
      ID: 0,
      UpdatedAt: "2020-06-08T17:28:35+08:00",
      authoritys: null,
      children: null,
      component: "views/tools/searchTools/searchTools.vue",
      hidden: false,
      menuId: "66",
      meta: { keepAlive: false, defaultMenu: false, title: "我的工单", icon: "" },
      defaultMenu: false,
      icon: "",
      keepAlive: false,
      title: "我的工单",
      name: "searchTools",
      parentId: "61",
      path: "searchTools",
      sort: 0,
      systemkey: "",
      systemname: ""
    },
    {
      CreatedAt: "2020-06-09T09:39:03+08:00",
      DeletedAt: null,
      ID: 0,
      UpdatedAt: "2020-06-09T09:39:03+08:00",
      authoritys: null,
      children: null,
      component: "views/tools/declare/declare.vue",
      hidden: false,
      menuId: "80",
      meta: { keepAlive: false, defaultMenu: false, title: "申报", icon: "" },
      defaultMenu: false,
      icon: "",
      keepAlive: false,
      title: "申报",
      name: "declare",
      parentId: "61",
      path: "declare",
      sort: 1,
      systemkey: "",
      systemname: ""
    },
    {
      CreatedAt: "2020-06-08T09:28:10+08:00",
      DeletedAt: null,
      ID: 0,
      UpdatedAt: "2020-06-08T09:28:10+08:00",
      authoritys: null,
      children: null,
      component: "views/tools/toolsOperation/toolsOperation.vue",
      hidden: false,
      menuId: "79",
      meta: { keepAlive: false, defaultMenu: false, title: "工单查询", icon: "" },
      defaultMenu: false,
      icon: "",
      keepAlive: false,
      title: "工单查询",
      name: "toolsOperation",
      parentId: "61",
      path: "toolsOperation",
      sort: 2,
      systemkey: "",
      systemname: ""
    }],
    component: "views/tools/index.vue",
    hidden: false,
    menuId: "61",
    meta: { keepAlive: false, defaultMenu: false, title: "工单", icon: "tickets" },
    defaultMenu: false,
    icon: "tickets",
    keepAlive: false,
    title: "工单",
    name: "tools",
    parentId: "0",
    path: "/tools",
    sort: 2,
    systemkey: "",
    systemname: "",
  }
]

//递归处理得到的路由数据 
const formatRouter = (routes) => {
  routes && routes.map(item => {
    item.meta.hidden = item.hidden
    if (item.children && item.children.length > 0) {
      formatRouter(item.children)
    }
  })
}

export const router = {
  state: {
    routers: []
  },
  mutations: {
    //设置动态路由
    setAsyncRouter(state, data) {
      state.routers = data
    }
  },
  actions: {
    //请求接口 获取动态路由
    async getRouters({ commit }) {
      const r = data //一般为接口请求到的数据
      //创建一个基础的路由
      const baseR = [{
        path: '/',
        redirect: '/home', //重定向页面, 一般为首页
        children: []
      }]
      formatRouter(r)
      baseR[0].children = r
      asyncRouterHandle(baseR)
      baseR.push({
        path: '/login',
        component: () => import('@/views/login.vue')
      },
        {
          path: '*',
          component: () => import('@/views/404.vue')
        })
      commit('setAsyncRouter', baseR)
      return true
    }
  },
  getters: {
    // 获取动态路由
    asyncRouters(state) {
      return state.routers
    }
  }
}