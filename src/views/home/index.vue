<template>
  <div>
    <h3>首页</h3>
    <img :src="img" alt="" />
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      img: require("@/assets/logo.png"),
    };
  },
};
</script>
<style lang="scss" scoped>
</style>