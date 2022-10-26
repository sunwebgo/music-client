<template>
    <div class="home">
<!--      轮播图-->
      <Carousel></Carousel>
<!--      歌手歌单列表-->
      <div class="section" v-for="(item,index) in singer_songList" :key="index">
          <div class="section-title">
            {{item.name}}
<!--           将当前歌手或者歌单列表传递给ContentList组件-->
            <ContentList :content_list="item.list"></ContentList>
          </div>
      </div>
<!--      回到顶部-->
      <div class="scroll-top" @click="toTop">
        <svg t="1658551963022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7600" width="48" height="48"><path d="M300.8 704 192 704l0 320L108.8 1024l0-320L0 704l0-64 300.8 0L300.8 704z" p-id="7601"></path><path d="M832 889.6 832 1024l-83.2 0 0-384 134.4 0c96 0 140.8 38.4 140.8 121.6 0 38.4-12.8 70.4-44.8 96-32 25.6-64 32-108.8 32L832 889.6zM832 704l0 121.6 38.4 0c51.2 0 70.4-19.2 70.4-64 0-38.4-25.6-64-70.4-64L832 697.6z" p-id="7602"></path><path d="M870.4 320 806.4 256 768 339.2 838.4 409.6Z" p-id="7603"></path><path d="M364.8 115.2 294.4 185.6 326.4 268.8 396.8 198.4Z" p-id="7604"></path><path d="M640 204.8 704 275.2 742.4 185.6 672 121.6Z" p-id="7605"></path><path d="M460.8 134.4 512 83.2l6.4 0L576 140.8l32-83.2L576 25.6C556.8 6.4 537.6 0 512 0c0 0 0 0 0 0-25.6 0-44.8 6.4-64 25.6L428.8 51.2 460.8 134.4z" p-id="7606"></path><path d="M992 441.6 934.4 384l-32 83.2 32 32C940.8 512 953.6 512 960 512c12.8 0 19.2-6.4 32-12.8C1011.2 486.4 1011.2 460.8 992 441.6z" p-id="7607"></path><path d="M96 384 38.4 441.6c-19.2 19.2-19.2 44.8 0 57.6 19.2 19.2 44.8 19.2 57.6 0L128 467.2 96 384z" p-id="7608"></path><path d="M192 403.2 262.4 332.8 230.4 249.6 160 320Z" p-id="7609"></path><path d="M512 832m-192 0a3 3 0 1 0 384 0 3 3 0 1 0-384 0Z" p-id="7610"></path></svg>
      </div>
    </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import ContentList from "@/components/ContentList";
import axios from 'axios';
export default {
  name: "index",
  data(){
    return{
      singer_songList:[
        {name:'歌手',list:[]},
        {name:'歌单',list:[]}
      ],
    }
  },
  components:{
    ContentList,
    Carousel,
  },
  created(){
    this.getSinger()
    this.getSongList()
  },

  methods:{
    //  查询前10名歌手
    getSinger() {
      //  发送axios请求
      axios.get("/singer/select").then(
          response => {
            //将从后端传回来的歌手对象数组存入数组中
            this.singer_songList[0].list = response.data.singerList.slice(0,10);
          }
      )
    },
    //  查询前10个歌单
    getSongList() {
      //  发送axios请求
      axios.get("/songList/select").then(
          response => {
            //将从后端传回来的歌手对象数组存入数组中
            this.singer_songList[1].list = response.data.playList.slice(0,10);
          }
      )
    },
    toTop(){
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  },



}
</script>

<style lang="scss" scoped>
@import "../assets/css/home.scss";
@import "../assets/css/scroll-top";
</style>