/* 处理获取到的路由 */
const _import = require('./_import') //获取组件的方法
export const asyncRouterHandle = (asyncRouter) => {
  asyncRouter.map(item => {
    if (item.component) {
      item.component = loadMenu(item.component)
      
    } else {
      delete item['component']
    }
    if (item.children) {
      asyncRouterHandle(item.children)
    }
  })
}

function loadMenu(path) {
  return () => import(`@/${path}`)
}