<template>
  <fragment>
    <template v-for="menu in menu">
      <el-submenu
        v-if="menu.children && menu.children.length > 0"
        :index="menu.path"
        :key="menu.path"
        router
        v-show="!menu.meta.hidden"
      >
        <template slot="title">
          <i :class="`el-icon-${menu.meta.icon}`"></i>
          <span slot="title">{{ menu.meta.title }}</span>
        </template>
        <!-- 调用自身  此处是重点-->
        <menu-tree :menu="menu.children"></menu-tree>
      </el-submenu>
      <!-- 如果没有子菜单，则显示当前内容 -->
      <el-menu-item
        v-else
        :index="menu.path"
        :key="menu.path"
        router
        v-show="!menu.meta.hidden"
      >
        <i :class="`el-icon-${menu.meta.icon}`"></i>
        <span slot="title">{{ menu.meta.title }}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>
<script>
export default {
  name: "menuTree",
  data() {
    return {};
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  created() {
    // console.log(this.menu);
  },
};
</script>
<style lang="scss" scoped>
</style>