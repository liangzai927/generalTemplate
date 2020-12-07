<template>
  <div>
    <v-head></v-head>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <v-side></v-side>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import vHead from "./components/head";
import vSide from "./components/aside.vue";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    vHead,
    vSide,
  },
  created() {
    console.log(this.$api);
  },
};
</script>
<style lang="scss" scoped>
</style>