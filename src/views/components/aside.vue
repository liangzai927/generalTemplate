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
      <!-- <menu-tree :menu="menu"></menu-tree> -->
      <MenuItem v-for="(item, index) in menu" :key="index" :item="item" path="/" />
    </el-menu>
  </div>
</template>
<script>
// import MenuTree from "./menuTree";
import MenuItem from "./MenuItem";
export default {
  name: "vaside",
  data() {
    return {
      menu: [],
      defaultPath: ""
    };
  },
  computed: {
    isCollapse() {
      return this.$store.getters.getFold;
    }
  },
  created() {
    this.menu = this.$store.getters.asyncRouters;
    this.defaultPath = "/" + this.$route.path.split("/")[1];
    console.log(this.defaultPath);
  },
  methods: {
    handleSelect(key, keypath) {}
  },
  components: {
    // MenuTree,
    MenuItem
  }
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