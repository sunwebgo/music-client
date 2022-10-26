<template>
  <div class="song-audio">
    <audio ref="player"
           :src="url"
           controls="controls"
           preload="true"
           @canplay="startPlay"
           @ended="ended"
            @timeupdate="timeUpdate">
    </audio>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "SongAudio",
  computed: {
    //获取到vuex中state的值
    ...mapGetters([
      'id',
      'url',
      'isPlay',
      'curTime',     //当前音乐播放位置
      'changeTime',  //指定播放时刻
      'autoNext',  //自动播放下一首
      'volume'       //音量
    ])
  },
  methods: {
    //获取链接后准备播放
    startPlay() {
      //获取到播放器
      let player = this.$refs.player;
      this.$store.commit('setDuration',player.duration);
      //  开始播放
      player.play();
      this.$store.commit('setIsPlay',true);
    },
    //播放完触发停止播放
    ended() {
      this.$store.commit("setIsPlay",false) //停止播放
      this.$store.commit("setCurTime",0)
      //修改autoNext的值，在PlayBar中实现监控
      this.$store.commit("setAutoNext",!this.autoNext)
    },
    //  暂停开始播放方法
    togglePlay() {
      //获取到播放器
      let player = this.$refs.player;
      if (this.isPlay) {
        player.play();
      } else {
        player.pause();
      }
    },
  //  音乐播放时记录音乐的播放位置
    timeUpdate(){
      this.$store.commit("setCurTime",this.$refs.player.currentTime)
    }
  },
  watch: {
    //  监听播放还是暂停
    isPlay() {
      this.togglePlay();
    },
  //  跳转到指定播放时刻
    changeTime(){
      this.$refs.player.currentTime = this.changeTime
    },
    //改变了音量
    volume(val){
      this.$refs.player.volume = val;
    }
  }
}
</script>

<style scoped>
.song-audio {
  display: none;
}
</style>