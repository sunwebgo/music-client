<template>
  <div class="song-list-album">
    <!--    左侧-->
    <div class="album-slide">
      <div class="album-img">
        <img :src="this.attachImgUrl(tempList.picture)">
      </div>
      <div class="album-info">
        <h2>简介：</h2>
        <span>
          {{ tempList.introduction }}
        </span>
      </div>
    </div>
    <div class="album-content">
      <div class="album-title">
        <p>{{ tempList.title }}</p>
      </div>
      <div class="album-score">
        <div>
          <h3>歌单评分</h3>
          <div>
            <el-rate v-model="average" disabled></el-rate>
          </div>
        </div>
        <span>{{ average * 2 }}</span>
        <div>
          <h3>评分</h3>
          <div @click="this.submitRank">
            <el-rate v-model="rank" allow-half show-text></el-rate>
          </div>
        </div>
      </div>
      <div class="songs-body">
<!--        歌单歌曲-->
        <SearchContent :songList="listOfSongs">
          <template slot="title">歌曲</template>
        </SearchContent>
<!--        评论-->
        <Comment :playListId="songListId" :type="1">
        </Comment>
      </div>
    </div>
  </div>
</template>

<script>
import {mixin} from "@/mixins";
import {mapGetters} from "vuex";
import axios from "axios";
import SearchContent from "../components/SearchContent";
import Comment from "@/components/Comment";
export default {
  mixins: [mixin],
  name: "SongListDisplay",
  components: {
    SearchContent,
    Comment
  },
  date() {
    return {
      songListId: '',  //前面传来的歌单id
      songList: [],   //该歌单中的所有歌曲
      rank:0,
    }
  },
  created() {
    this.songListId = this.$route.query.id;
    this.getSongById();
    this.getRank();
    this.refreshSet();
  },
  computed: {
    ...mapGetters([
      'tempList',   //当前歌单信息
      'listOfSongs',
      'average',
      'loginIn',  //用户是否登录
      'userId',
    ])
  },
  methods: {
    refreshSet() {
      if (localStorage.getItem('username') != null) {
        this.$store.commit('setUserId',localStorage.getItem('userId'))
      }
      //从浏览器本地存储中读取到歌单信息
      this.$store.commit('setTempList',JSON.parse(localStorage.getItem('tempList')))
    },

    //  根据当前歌单id获取当前歌单的歌曲列表
    getSongById() {
      axios.get('/playList_song/select/' + this.songListId).then(
          response => {
            if (response.data.code == 1) {
              //从后端获取到当前歌单中歌曲列表
              this.songList = response.data.playListSong
              //将搜索到歌单歌曲存入缓存
              this.$store.commit('setListOfSongs', this.songList)
            } else {
              this.$message({
                type: 'error',
                center: true,
                message: '暂无歌曲',
                duration: 1000
              });
            }
          }
      )
    },

    //  获取歌单评分
    getRank() {
      axios.get('/ranks/average/' + this.songListId).then(
          response => {
            if (response.data.code == 1) {
              this.$store.commit('setAverage', (response.data.average - 0) / 2)
            }
          }
      )
    },
    //  提交评分
    submitRank() {
      if (this.loginIn){
        axios.post('/ranks/add/' + this.songListId +'/'+ this.userId + '/' + this.rank * 2).then(
            response =>{
                if (response.data.code == 1){
                  this.$message({
                    type: 'success',
                    center: true,
                    message: '评分成功',
                    duration: 1000
                  });
                  this.getRank();
                }else{
                  this.$message({
                    type: 'error',
                    center: true,
                    message: '已经评价过了',
                    duration: 1000
                  });
                }
            }
        )
      }else{
        this.rank = null;
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
@import "../assets/css/song-list-album";
</style>