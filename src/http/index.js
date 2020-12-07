// 导入所有接口
import apis from './api'
import list from './list'

const install = Vue => {
  if (install.installed)
    return;

  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    // 注意，此处挂载在 Vue 原型的 $api 对象上
    $api: {
      get() {
        //将多个js对象合并成一个 并返回
        let newObj = {}
        Object.assign(newObj, apis, list)
        return newObj
      }
    }
  })
}

export default install