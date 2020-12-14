<template>
  <div>
    <v-head></v-head>
    <el-container>
      <el-container>
        <!-- <el-aside style="max-width: 200px">
        </el-aside> -->
        <v-side></v-side>

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
    // console.log(this.$api);
  },
};
</script>
<style lang="scss" scoped>
</style>