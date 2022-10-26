<template>
    <div class="content-list">
        <ul class="section-content">
          <li class="content-item" v-for="(item,index) in content_list" :key="index">
            <div class="kuo" @click="goAlbum(item,item.name)">
              <img class="item-img" :src="`${'http://43.143.117.57:8090'}${(item.picture)}`">
              <div class="mask">
                <svg t="1658550025152" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6654" width="48" height="48"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" p-id="6655" fill="#e6e6e6"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" p-id="6656" fill="#e6e6e6"></path></svg>
              </div>
            </div>
            <span class="test" style="">{{item.name || item.title}}</span>
          </li>
        </ul>
    </div>
</template>

<script>
import {mixin} from "@/mixins";
export default {
  mixins:[mixin],
  name: "ContentList",
  props:['content_list'],
  methods:{
    goAlbum(item,type){
      //将当前歌单信息存入缓存
      this.$store.commit('setTempList',item);
      //将当前歌单信息存入本地浏览器存储
      localStorage.setItem('tempList',JSON.stringify(item));
      if (type){
      //  歌手展示页面
        this.$router.push({name:'singerDisplay',query:{
            id:item.id
          }})
      }else{
        //歌单展示页面
        this.$router.push({name:'songListDisplay',query:{
            id:item.id
          }})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/content-list.scss";
.test{
  line-height: 30px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #787878;
}
</style>