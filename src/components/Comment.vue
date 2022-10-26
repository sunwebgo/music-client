<template>
  <div class="comment">
    <h2>歌单评论</h2>
    <div class="comment-msg">
      <div class="comment-img">
        <img :src="attachImgUrl(userPicture)">
      </div>
      <el-input class="comment-input"
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="commentContent"
      ></el-input>
    </div>
    <el-button type="primary" class="sub-btn" @click="submitComment">评论</el-button>
    <p>精彩评论：共{{commentList.length}}条评论</p>
    <ul class="popular" v-for="(item,index) in commentList" :key="index">
      <li>
<!--        评价列表用户头像-->
        <div class="popular-img">
            <img :src="attachImgUrl(userPictures[index])">
        </div>
<!--        每个用户的评价信息-->
        <div class="popular-msg">
          <ul>
            <li class="name">{{userNames[index]}}</li>
            <li class="time">{{item.time}}</li>
            <li class="name">{{item.content}}</li>
          </ul>
        </div>
<!--        点赞操作-->
        <div class="up" ref="up" @click="up(item.id,item.number)">
          <svg t="1658924770524" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4635" width="48" height="48"><path d="M977.894551 346.01572a172.109348 172.109348 0 0 0-129.335113-58.567799 4.252113 4.252113 0 0 1-3.619359-6.4541c4.125562-6.681892 7.593059-12.655099 10.579663-17.539968 3.518118-5.973207 6.023827-10.377181 7.289337-12.655099l0.227792-0.430273a2.758812 2.758812 0 0 0 0.202482-0.379653c1.26551-2.328538 2.404469-4.707697 3.518117-7.112166A171.375352 171.375352 0 1 0 552.68322 105.543527a4.479905 4.479905 0 0 1-0.253102 0.556824c-2.353848 5.06204-14.958327 30.372238-41.660586 65.477483s-72.690889 86.81398-143.205102 137.839339a172.109348 172.109348 0 0 0-87.826387 150.013545v392.308073a172.109348 172.109348 0 0 0 172.109348 172.109348h345.408275a172.109348 172.109348 0 0 0 170.666666-149.836374l51.177221-392.308072A172.109348 172.109348 0 0 0 977.894551 346.01572z m-59.175244 122.729151l-51.202531 392.308073a70.868555 70.868555 0 0 1-70.26111 61.706263H451.79677a70.868555 70.868555 0 0 1-70.868555-70.868555v-392.308073a70.868555 70.868555 0 0 1 38.699293-63.148944l1.569233-0.784616a814.456869 814.456869 0 0 0 124.019971-108.175788q11.364279-12.174205 21.235256-23.791586c54.771269-64.161353 76.968313-113.136586 78.866578-117.414009v-0.126551a70.134559 70.134559 0 0 1 135.536111 26.676949 69.248702 69.248702 0 0 1-6.352859 27.841218l-0.683376 1.417371a68.91967 68.91967 0 0 1-5.062039 8.706708 883.325918 883.325918 0 0 1-50.341985 76.6899l-3.796529 5.06204a37.965297 37.965297 0 0 0 3.290325 50.114193l25.664541 25.512679a70.868555 70.868555 0 0 0 49.962332 20.602502h54.745958a70.868555 70.868555 0 0 1 70.438282 79.980226z" fill="#0D0A16" opacity=".82" p-id="4636"></path><path d="M3.451919 287.447921m70.868555 0l37.205991 0q70.868555 0 70.868555 70.868555l0 594.814969q0 70.868555-70.868555 70.868555l-37.205991 0q-70.868555 0-70.868555-70.868555l0-594.814969q0-70.868555 70.868555-70.868555Z" fill="#FF6464" p-id="4637"></path><path d="M855.418501 263.453853a144.774334 144.774334 0 0 0 7.289337-12.655099c-1.2402 2.303228-3.77122 6.681892-7.289337 12.655099z" fill="#0D0A16" opacity=".82" p-id="4638"></path><path d="M421.196741 395.623709l-1.417372 1.012407-0.151861-0.227791zM773.970283 202.051312a68.91967 68.91967 0 0 1-5.062039 8.706709c1.948885-3.214395 3.644669-6.226309 5.062039-8.706709z" fill="#0D0A16" p-id="4639"></path></svg>
          {{item.number}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mixin} from "@/mixins";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  mixins: [mixin],
  name: "Comment",
  props: ['playListId'],
  data() {
    return {
      commentContent: '', //评价内容
      commentList:[],     //当前歌单评价列表
      userPictures:[],     //评价列表用户头像
      userNames:[],        //评价列表用户名
      }
  },
  computed: {
    ...mapGetters([
      'userPicture',
      'loginIn'
    ])
  },
  created() {
    this.getCommentList()
  },
  methods: {
    //添加评论
    submitComment() {
      if (this.loginIn) {
        axios.post('/comment/add', {
          userId: localStorage.getItem('userId'),
          playListId: this.playListId,
          content: this.commentContent,
        }).then(
            response => {
              if (response.data.code == 1) {
                this.commentContent = '',
                this.getCommentList();
                this.$message({
                  type: 'success',
                  center: true,
                  message: '评论成功',
                  duration: 1000
                });
              }
            }
        )
      } else {
        this.$message({
          type: 'warning',
          center: true,
          message: '请先登录',
          duration: 1000
        });
      }
    },
    //获取到评论列表
    getCommentList() {
      axios.get('/comment/selectByPlayListId/' + this.playListId).then(
          response =>{
            if (response.data.code == 1){
              this.commentList = response.data.commentList
              for (let item of this.commentList){
                  this.getUsers(item.userId)
              }
            }
          }
      )
    },
    //查询用户头像和用户名
    getUsers(userId){
      axios.get('/user/select/' + userId).then(
          response =>{
            if (response.data.code == 1){
              this.userPictures.push(response.data.user.picture)
              this.userNames.push(response.data.user.username)
            }
          }
      )
    },

  //  评论点赞
    up(id,number){
      if (this.loginIn) {
        axios.post('/comment/update/' + id + '/' + (number + 1)).then(
            response => {
              if (response.data.code == 1) {
                this.getCommentList()
              }
            }
        )
      } else {
        this.$message({
          type: 'warning',
          center: true,
          message: '请先登录',
          duration: 1000
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/comment";
</style>