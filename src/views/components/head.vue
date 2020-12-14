<template>
  <div class="header">
    <div class="left">
      <div style="" class="fold" @click="clickFold">
        <i class="el-icon-s-fold" v-if="!isFold"></i>
        <i class="el-icon-s-unfold" v-else></i>
      </div>
      <div class="title">后台管理通用模板</div>
    </div>
    <div class="right">
      <div style="width: 30px; height: 30px; padding-right: 15px">
        <el-avatar :src="imgUrl" :size="30" @error="errorHandler"></el-avatar>
      </div>
      <div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus"
              >狮子头</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >螺蛳粉</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              >蚵仔煎</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vhead",
  data() {
    return {
      // isFold: true,
      imgUrl:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606733691162&di=f4dcd6cee16b157f88724b12c042aa39&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20191102%2F15%2F1572680088-UVtofrnMAP.jpg",
    };
  },
  methods: {
    clickFold() {
      this.$store.commit("changeFold");
      // this.isFold = !this.isFold;
    },
    errorHandler() {
      return true;
    },
  },
  computed: {
    isFold() {
      return this.$store.getters.getFold;
    },
  },
  created() {
    // this.isFold = this.$store.getters.getFold;
  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 50px;
  width: 100vw;
  padding: 0 15px;
  background: #409eff;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    .fold {
      font-size: 20px;
      cursor: pointer;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      padding-left: 15px;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

::v-deep .el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
::v-deep .el-icon-arrow-down {
  font-size: 12px;
}
::v-deep .demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>