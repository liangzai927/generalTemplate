<template>
  <div class="aside">
    <el-menu
      :default-active="defaultPath"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
      :collapse="isCollapse"
      router
    >
      <menu-tree :menu="menu"></menu-tree>
    </el-menu>
  </div>
</template>
<script>
import MenuTree from "./menuTree";
export default {
  name: "vaside",
  data() {
    return {
      menu: [],
      defaultPath: "",
    };
  },
  computed: {
    isCollapse() {
      return this.$store.getters.getFold;
    },
  },
  created() {
    this.menu = this.$store.getters.asyncRouters[0].children;
    this.defaultPath = this.$route.path.split("/")[1];
  },
  methods: {
    handleSelect(key, keypath) {},
  },
  components: {
    MenuTree,
  },
};
</script>
<style lang="scss" scoped>
.aside {
  height: calc(100vh - 50px);
  background-color: #545c64;
  // width: 200px;
}
::v-deep .el-menu {
  // box-sizing: border-box;
  border: none;
}
::v-deep .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>