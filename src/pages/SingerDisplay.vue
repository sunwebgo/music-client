<template>
  <div class="song-list-album">
    <!--    左侧-->
    <div class="album-slide">
      <div class="album-img">
        <img :src="this.attachImgUrl(tempList.picture)">
      </div>
      <ul class="user-info">
        <li>姓名：{{tempList.name}}</li>
        <li>性别：{{changeGender(tempList.gender)}}</li>
        <li>生日：{{changeBirth(tempList.birth)}}</li>
        <li>籍贯 ：{{tempList.location}}</li>
      </ul>
    </div>
    <div class="album-content">
      <div class="album-info">
        <h2>{{tempList.name}}</h2>
        <span style="color: #787878;">
          {{ tempList.introduction }}
        </span>
      </div>
      <div class="songs-body">
        <!--        歌手歌曲-->
        <SearchContent :songList="listOfSongs">
          <template slot="title">歌曲</template>
        </SearchContent>
<!--        &lt;!&ndash;        评论&ndash;&gt;
        <Comment :playListId="songListId" :type="1">
        </Comment>-->
      </div>
    </div>
  </div>
</template>

<script>
import {mixin} from "@/mixins";
import {mapGetters} from "vuex";
import axios from "axios";
import SearchContent from "../components/SearchContent";
export default {
  mixins: [mixin],
  name: "SingerDisplay",
  components: {
    SearchContent,
  },
  date() {
    return {
      singerId: '',  //前面传来的歌单id
      songList: [],   //该歌手的所有歌曲
      rank:0,
    }
  },
  created() {
    this.singerId = this.$route.query.id;
    this.getSongById();
    this.refreshSet();
  },
  computed: {
    ...mapGetters([
      'tempList',   //当前歌手信息
      'listOfSongs',
      'loginIn',  //用户是否登录
      'userId',
    ])
  },
  methods: {
    refreshSet() {
      if (localStorage.getItem('username') != null) {
        this.$store.commit('setUserId',localStorage.getItem('userId'))
      }
      //从浏览器本地存储中读取到歌手信息
      this.$store.commit('setTempList',JSON.parse(localStorage.getItem('tempList')))
    },

    //  根据当前歌手id获取当前歌单的歌曲列表
    getSongById() {
      axios.get('/song/select/' + this.singerId).then(
          response => {
            if (response.data.code == 1) {
              //从后端获取到当前歌单中歌曲列表
              this.songList = response.data.songList
              //将搜索到歌手歌曲存入缓存
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
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/song-list-album";
</style>