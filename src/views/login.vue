<template>
  <div class="login">
    <el-card class="box-card" shadow="hover">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input
            v-model="ruleForm.account"
            autocomplete="off"
            size="mini"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            size="mini"
          ></el-input>
        </el-form-item>
        <div style="text-align: center">
          <el-button type="primary" @click="submitForm('ruleForm')" size="small"
            >登录</el-button
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        account: "",
        pass: "",
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "change" }],
        pass: [{ required: true, message: "请输入密码", trigger: "change" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const userData = {
            id: 1,
            name: "lwl",
            token: "1234567890qwertyuiop",
          };
          sessionStorage.setItem("token", userData.token);
          this.$router.push({ path: "/" });
        } else {
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted() {
    //监听回车按钮
    document.onkeydown = (e) => {
      let _key = window.event.keyCode;
      if (_key === 13) {
        this.submitForm("ruleForm");
      }
    };
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("../../public/img/u=2689892178,2477135667&fm=26&gp=0.jpg")
    no-repeat;
  background-size: 100% 100%;
  .box-card {
    width: 20vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>