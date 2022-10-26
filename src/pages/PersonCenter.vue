<template>
  <div>
    <Img/>
    <div class="signUp" style="opacity:0.8;height: 500px">
      <div class="signUp-head">
        <span>用户信息</span>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
        <el-form-item label="头像" prop="picture" style="margin-bottom: 0px;">
          <el-upload
              :action="uploadUrl(ruleForm.id)"
              :show-file-list="false"
              :on-success="uploadSuccess">
            <img :src="getUrl(ruleForm.picture)" style="width: 80px;border-radius: 20%;" class="avatar">
          </el-upload>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="defaultGender">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
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
        <el-form-item style="margin-bottom: 0px;">
          <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
          <el-button type="danger" @click="cancelButton">注销</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog title="注销用户" :visible.sync="editVisible" width="400px" center>
      <el-form label-width="100px" class="demo-updateForm">
        <el-form-item label="用户密码" ref="cancelPwd">
          <el-input v-model="cancelPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="cancelUser">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Img from "@/components/Img";
import axios from "axios";
import {mixin} from "@/mixins";
import {mapGetters} from "vuex";

export default {
  mixins: [mixin],
  components: {
    Img
  },
  computed: {
    ...mapGetters([
      'userMsg'
    ])
  },
  data() {
    return {
      defaultGender: 1,
      editVisible: false,
      cancelPassword:'',
      ruleForm: {
        id: '',
        username: '',
        password: '',
        phone: '',
        email: '',
        birth: '',
        picture: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
          {
            pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
            message: '请输入正确的手机号码',
          }
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址'}
        ],
        birth: [
          {required: true, message: '请选择日期', trigger: 'blur'},
        ],
      }
    };
  },
  mounted() {
    this.getUserMsg()
    setTimeout(() => {
      this.echoUserMsg()
    }, 100)
  },

  methods: {
    //提交按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/user/update',
              //传递的参数
              {
                username: this.ruleForm.username,
                password: this.ruleForm.password,
                gender: this.defaultGender,
                phone: this.ruleForm.phone,
                email: this.ruleForm.email,
                birth: this.ruleForm.birth,
                id: this.ruleForm.id
              }).then(
              response => {
                if (response.data.code == 1) {
                  localStorage.setItem('username', response.data.username)
                  this.$message({
                    type: 'success',
                    center: true,
                    message: response.data.message,
                    duration: 1000
                  });
                  //修改成功之后刷新页面并且回显新数据
                  this.$router.go(0)
                  this.echoUserMsg()
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

    getUserMsg() {
      axios.get('/user/select/' + localStorage.getItem('userId')).then(
          response => {
            if (response.data.code == 1) {
              //将用户信息存入缓存
              this.$store.commit('setUserMsg', response.data.user)
            }
          }
      )
    },

    //回显用户信息
    echoUserMsg() {
      this.ruleForm.id = this.userMsg.id;
      this.ruleForm.username = this.userMsg.username
      this.ruleForm.password = this.userMsg.password
      this.defaultGender = this.userMsg.gender - 0
      this.ruleForm.phone = this.userMsg.phone
      this.ruleForm.email = this.userMsg.email
      this.ruleForm.birth = this.userMsg.birth
      this.ruleForm.picture = this.userMsg.picture
    },


    //获取图片访问地址
    getUrl(url) {
      return `${this.$store.state.HOST}${url}`
    },

    //  更新图片访问地址
    uploadUrl(id) {
      localStorage.setItem('userPicture', this.ruleForm.picture)
      return `${this.$store.state.HOST}/user/updateImg?id=${id}`

    },

    //  上传图片成功之后的操作
    uploadSuccess() {
      this.$router.go(0)
    },

    //  修改用户
    updateSinger(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.editVisible = false
          //  转换日期格式

          let birth = new Date(this.updateForm.birth);
          let datetime = birth.getFullYear() + '-' + (birth.getMonth() + 1) + '-' + birth.getDate();

          axios.post('/singer/update',
              //传递的参数
              {
                id: this.updateForm.id,
                name: this.updateForm.name,
                gender: this.echoGender,
                birth: datetime,
                location: this.updateForm.location,
                introduction: this.updateForm.introduction
              }).then(
              response => {
                if (response.data.code == 1) {
                  //修改成功后刷新歌手列表
                  this.selectAllSinger()
                  this.handleCurrentChange(1)
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
          for (let key in this.updateForm) {
            this.updateForm[key] = ""
          }
        } else {
          return false;
        }
      });
    },
    //  注销用户按钮
    cancelButton() {
      this.editVisible = true
    },
    cancel(){
      this.editVisible = false
    },
  //  注销用户
    cancelUser(){
        axios.post('/user/delete',{id:localStorage.getItem('userId'),password:this.cancelPassword}).then(
            response =>{
                if (response.data.code == 1){
                  this.$message({
                    type: 'success',
                    center: true,
                    message: response.data.message,
                    duration:1000
                  });
                  //注销清除用户在浏览器的本地存储
                  localStorage.removeItem('userId')
                  localStorage.removeItem('username')
                  localStorage.removeItem('userPicture')
                  localStorage.removeItem('tempList')
                  localStorage.removeItem('collectNumber')
                  //返回首页
                  this.$router.replace({name:'index'})
                  this.$router.go(0)
                }else{
                  this.$message({
                    type: 'error',
                    center: true,
                    message: response.data.message,
                    duration:1000
                  });
                }
            }
        )
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