<template>
    <div class="search">
      <nav class="searchList-nav" ref="change">
          <span :class="{isActive: currentPage == 'Song'}">歌曲</span>
      </nav>
      <component :is="currentPage" :songList="songList"></component>
    </div>
</template>

<script>
import Song from "@/components/search/Song";
import axios from "axios";
import {mapGetters} from 'vuex'
export default {
  name: "SearchPage",
  data(){
    return{
      //默认是歌曲页面
      defaultPage:'Song',
      currentPage:'Song',
      songList:[],
      keywords:''
    }
  },
  components:{
    Song,
  },
  mounted() {
    this.keywords = this.$route.query.keywords;
    this.selectSong()
  },
  computed:{
    ...mapGetters([
        'listOfSongs'
    ])
  },
  methods:{
  //  根据用户输入的歌手 / 歌曲查询歌曲
    selectSong(){
    //  获取从首页获取的用户输入的信息
      axios.get('/select/song_singer/' + this.keywords).then(
          response =>{
            if (response.data.code == 1) {
              this.songList = response.data.songList
              this.setSongList();
              this.$message({
                type: 'success',
                center: true,
                message: response.data.message,
                duration:1000
              });
            } else {
              this.$message({
                type: 'error',
                center: true,
                message: response.data.message,
                duration:1000
              });
            }
          }
      )
    },
    setSongList(){
      this.$store.commit('setListOfSongs',this.songList);
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/search.scss";
</style>