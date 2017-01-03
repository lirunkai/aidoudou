<template>
  <el-form :model="ruleForm2" label-position="left" :rules="rules2" ref="ruleForm2" label-width="0px" class="demo-ruleForm card-box loginform">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="帐号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked style="margin:0px 0px 35px 0px;">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [
            { required: true, message: '请输入帐号', trigger: 'blur'}
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        checked: true
      }
    },
    methods: {
      handleSubmit2 (ev) {
        var _this = this;
        this.$ref.ruleForm2.validate( (valid) => {
          if ( valid ) {
            _this.$router.replace('/table')
          } else {
            console.log( 'submit error' );
            return false;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card-box {
    padding: 20px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #f9fafc;
    margin: 120px auto;
    width: 400px;
    border: 2px solid #8492a6;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .loginform {
    width: 350px;
    padding: 35px 35px 15px 35px;
  }
</style>
