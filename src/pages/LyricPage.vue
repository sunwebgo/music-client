<template>
  <div class="song-lyric">
    <h1 class="lyric-title">歌词</h1>
    <!--      有歌词-->
    <ul class="has-lyric" v-if="lyr.length">
      <li v-for="(item,index) in lyr" ref="has-lyric-li" :key="index"
          style="font-size: 16px;color: grey;list-style: none">
        {{ item[1] }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {mixin} from "@/mixins";

export default {
  mixins: [mixin],
  name: "LyricPage",
  data() {
    return {
      lyr: [],
    }
  },
  computed: {
    ...mapGetters([
      'curTime',  //当前播放的时间
      'id',       //当前播放的歌曲id
      'lyric',    //歌词
      'listIndex',//当前歌曲在歌单中的位置
      'listOfSongs', //当前歌曲列表
      'curTime',          //当前播放的位置
    ])
  },
  created() {
    //当前lyric是解析后的歌词
    this.lyr = this.lyric;
  },
  watch: {
    //监控歌曲id，变化了就更换相应歌曲的歌词
    id() {
      //当前lyric是从数据库中查询到的歌词
      this.lyr = this.parseLyric(this.listOfSongs[this.listIndex].lyric);
    },
    //  监控播放时间
    curTime() {
      //有歌词的情况下
      if (this.lyr.length > 0) {
        for (let i = 0; i < this.lyr.length; i++) {
          //如果当前时间等于了
          if (this.curTime >= this.lyr[i][0]) {
            for (let j = 0; j < this.lyr.length; j++) {
              this.$refs["has-lyric-li"][j].style.color = 'grey';
              this.$refs["has-lyric-li"][j].style.fontSize = '16px';
            }
              if (i >= 0) {
                this.$refs["has-lyric-li"][i].style.color = 'black';
                this.$refs["has-lyric-li"][i].style.fontSize = '20px';
              }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/lyric.scss";
</style>