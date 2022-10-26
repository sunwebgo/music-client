<template>
  <div class="song-list">
    <ul class="song-list-header">
      <li v-for="(item,index) in songStyle"
          :key="index"
          :class="{active:item.style == activeStyle}"
          @click="handleChangeView(item.style)">
        {{item.style}}
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
                       :total="songList.length"
                       @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import ContentList from "@/components/ContentList";
import axios from 'axios';

export default {
  name: "SongList",
  data() {
    return {
      songList: [],
      pageSize: 10, //每页数据个数
      currentPage: 1, //当前页
      activeStyle:'全部歌单',//当前点击的歌单风格，默认值是全部歌单
      songStyle:[
        {style:'全部歌单'},
        {style:'国风'},
        {style:'流行'},
        {style:'摇滚'},
        {style:'粤语'},
        {style:'欧美'},
        {style:'纯音乐'}
      ]

    }
  },

  computed: {
    //计算出每页现实的数据
    data() {
      return this.songList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },

  components: {
    ContentList,
  },
  created() {
    this.getAllSongList()
  },

  methods: {

    //  查询所有歌单
    getAllSongList() {
      //  发送axios请求
      axios.get("/songList/select").then(
          response => {
            //将从后端传回来的歌手对象数组存入数组中
            this.songList = response.data.playList;
          }
      )
    },
    //根据歌单风格显示对应歌单
    getSongListByStyle(style){
      axios.get('/songList/select/' + style).then(
          response =>{
            if (response.data.code == 1){
                this.songList = response.data.playList
            }
          }
      )
    },

    handleChangeView(style){
      this.activeStyle = style;
      this.songList = [];
      if (style == '全部歌单'){
        this.getAllSongList()
      }else{
        this.getSongListByStyle(style)
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