<template>
  <div class="song-list">
    <ul class="song-list-header">
      <li v-for="(item,index) in singerGender"
          :key="index"
          :class="{active:item.gender == activeGender}"
          @click="handleChangeView(item.gender)">
        {{item.gender}}
      </li>
    </ul>
    <div>
      <!--      歌单列表-->
      <!--           将当前歌单列表传递给ContentList组件-->
      <ContentList :content_list="data"></ContentList>
      <!--    分页条-->
      <div class="paging">
        <el-pagination background
                       layout="total,prev,pager,next"
                       :current-page="currentPage"
                       :page-size="pageSize"
                       :total="singerList.length"
                       @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import ContentList from "@/components/ContentList";
import axios from 'axios';
import {mixin} from "@/mixins";

export default {
  mixins:[mixin],
  name: "Singer",
  data() {
    return {
      singerList: [],
      pageSize: 10, //每页数据个数
      currentPage: 1, //当前页
      activeGender:'全部歌手',//当前点击的歌单风格，默认值是全部歌单
      singerGender:[
        {gender:'全部歌手'},
        {gender:'男'},
        {gender:'女'},
        {gender:'组合'},
      ]

    }
  },

  computed: {
    //计算出每页现实的数据
    data() {
      return this.singerList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },

  components: {
    ContentList,
  },
  created() {
    this.getAllSinger()
  },

  methods: {

    //  查询所有歌手
    getAllSinger() {
      //  发送axios请求
      axios.get("/singer/select").then(
          response => {
            //将从后端传回来的歌手对象数组存入数组中
            this.singerList = response.data.singerList;
          }
      )
    },
    //根据性别显示对应的歌手
    getSingerByGender(gender){
      axios.get('/singer/select/' + this.changeGenders(gender)).then(
          response =>{
            if (response.data.code == 1){
              this.singerList = response.data.singerList
            }
          }
      )
    },

    handleChangeView(gender){
      this.activeGender = gender;
      this.singerList = [];
      if (gender == '全部歌手'){
        this.getAllSinger()
      }else{
        this.getSingerByGender(gender)
      }
    },
    //  获取当前页
    handleCurrentChange(val) {
      this.currentPage = val
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/css/song-list";
.paging {
  display: flex;
  margin-top: 50px;
  justify-content: center;
}
</style>