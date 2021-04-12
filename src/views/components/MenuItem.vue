<template>
  <fragment>
    <template v-if="!hasChild">
      <el-menu-item
        :index="getPath(item.path)"
      >
        <i :class="`el-icon-${item.meta.icon}`"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu
        index="item.path"
      >
        <template slot="title">
          <i :class="`el-icon-${item.meta.icon}`"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <!-- 调用自身  此处是重点-->
        <MenuItem v-for="(child, index) in item.children" :key="index" :item="child" :path="getPath(item.path)"  />
      </el-submenu>
    </template>
  </fragment>
</template>

<script>
const path = require('path')
  export default {
    name: 'MenuItem',
    props: ['item', 'path'],
    methods: {
      getPath(dir) {
        return path.join(this.path, dir)
      }
    },
    computed: {
      hasChild() {
        return this.item?.children && this.item.children.length !== 0
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>