<template>
  <div>
    <Img/>
    <div class="signUp" style="opacity:0.8">
      <div class="signUp-head">
        <span>用户登录</span>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="goRegister" @click="goRegister">
        还没有账号？点击注册
      </div>
    </div>
  </div>
</template>

<script>
import Img from "@/components/Img";
import axios from "axios";

export default {
  components: {
    Img
  },
  data() {
    return {
      defaultGender: 1,
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    //提交按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.get('/user/login/' + this.ruleForm.username + "/" + this.ruleForm.password).then(
              response => {
                if (response.data.code == 1) {
                  this.changeIndex('首页')
                  //成功后设置缓存
                  this.$store.commit('setLoginIn', true),
                  this.$store.commit('setUserId', response.data.user.id)
                  this.$store.commit('setUsername', response.data.user.username)
                  this.$store.commit('setUserPicture', response.data.user.picture)

                  localStorage.setItem('userId', response.data.user.id)
                  localStorage.setItem('username', response.data.user.username)
                  localStorage.setItem('userPicture', response.data.user.picture)
                  setTimeout(() => {
                    //登录成功后跳转首页
                    this.$router.push({name: 'index'})
                  }, 500)

                  this.$message({
                    type: 'success',
                    center: true,
                    message: response.data.message,
                    duration: 1000
                  });
                } else {
                  this.$message({
                    type: 'error',
                    center: true,
                    message: response.data.message,
                    duration: 1000
                  });
                }
              },
          )

          //清除原始编辑样式
          this.$nextTick(function () {
            this.$refs[formName].clearValidate()
          })
          for (let key in this.ruleForm) {
            this.ruleForm[key] = ""
          }
        } else {
          return false;
        }
      });
    },
    //重置按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //在登录页面跳转注册页面
    goRegister() {
      this.$router.push({name: 'register'})
    },
    changeIndex(value) {
      this.$store.commit('setActiveName', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/sign-up";

.signUp {
  margin-top: 130px;
}

.el-form-item {
  margin-bottom: 17px;
}

.goRegister {
  margin-left: 120px;
  cursor: pointer;
}

.goRegister:hover {
  color: #3C88D9;
}
</style>