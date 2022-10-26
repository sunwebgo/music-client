<template>
    <div class="content">
      <h1 class="title">
        <slot name="title"></slot>
        <hr>
      </h1>
      <ul>
        <li style="text-align: center">
          <div class="song-item">
            <span class="item-index"></span>
            <span class="item-title">歌曲名</span>
            <span class="item-name">歌手</span>
            <span class="item-intro">专辑</span>
          </div>
        </li>
        <li style="text-align: center" v-for="(item,index) in songList" :key="index">
<!--          点击歌曲的同时修改该歌曲的信息，信息更改后传给播放器-->
<!--          id,url,name,picture,index,lyric-->
          <div class="song-item" @click="toPlay(item.id,item.url,item.name,item.singerName,item.picture,index,item.lyric)">
            <span class="item-index">{{index + 1}}</span>
            <span class="item-title">{{item.name}}</span>
            <span class="item-name">{{item.singerName}}</span>
            <span class="item-intro">{{item.album}}</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import {mixin} from "@/mixins";
export default {
  mixins:[mixin],
  name: "SearchContent",
  props:['songList'],
  methods:{
    //设置播放器
    toPlay(id,url,name,singerName,picture,index,lyric){
      this.$store.commit('setId',id);
      this.$store.commit('setUrl',this.$store.state.HOST+url);
      this.$store.commit('setPicture',picture);
      this.$store.commit('setName',name);
      this.$store.commit("setSingerName",singerName);
      this.$store.commit('setListIndex',index);
      this.$store.commit('setLyric',this.parseLyric(lyric));
      this.getCollectState(id);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/album-content.scss";
</style>