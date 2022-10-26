<template>
  <div>
    <Img/>
    <div class="signUp" style="opacity:0.8">
      <div class="signUp-head">
        <span>用户注册</span>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="defaultGender">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="密码" prop="password1">
          <el-input type="password" v-model="ruleForm.password1"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input type="password" v-model="ruleForm.password2"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="生日" prop="birth">
          <el-date-picker v-model="ruleForm.birth" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
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
    //验证第二次输入的密码是否和第一次的相同
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password1) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      defaultGender: 1,
      ruleForm: {
        username: '',
        password1: '',
        password2: '',
        gender: '',
        phone: '',
        email: '',
        birth: '',
        introduction: '',
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur'}
        ],
        password1: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
        ],
        password2: [
          {required: true, message: '请输入确定密码', trigger: 'blur'},
          {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'},
          //验证第二次输入的密码是否和第一次的相同
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur'},
          {
            pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
            message: '请输入正确的手机号码',
          }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址' }
        ],
        birth: [
          {required: true, message: '请选择日期', trigger: 'blur'},
        ],
      }
    };
  },
  methods: {
    //提交按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //  转换日期格式
          let birth = this.ruleForm.birth;
          let datetime = birth.getFullYear() + '-' + (birth.getMonth() + 1) + '-' + birth.getDate();
          axios.post('/user/add',
              //传递的参数
              {
                username: this.ruleForm.username,
                password: this.ruleForm.password1,
                gender: this.defaultGender,
                phone: this.ruleForm.phone,
                email: this.ruleForm.email,
                picture: '/img/user/朱茵.jpg',
                birth: datetime,
              }).then(
              response => {
                if (response.data.code == 1) {
                  //添加成功后跳转登录页面
                  this.$router.replace({name: 'login'})
                  this.$message({
                    type: 'success',
                    center: true,
                    message: response.data.message,
                    duration:1000
                  });
                } else {
                  this.$message({
                    type: 'error',
                    center: true,
                    message: response.data.message,
                    duration:1000
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/sign-up";

.el-form-item {
  margin-bottom: 17px;
}
</style>