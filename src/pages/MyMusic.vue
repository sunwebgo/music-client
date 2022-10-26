<template>
  <div class="my-music">
    <div class="album-slide">
      <!--      用户头像-->
      <div class="album-img">
        <img :src="this.attachImgUrl(userMsg.picture)">
      </div>
      <!--      用户信息-->
      <ul class="album-info">
        <li>姓名：{{ userMsg.username }}</li>
        <li>性别：{{ changeGender(userMsg.gender) }}</li>
        <li>生日：{{ changeBirth(userMsg.birth) }}</li>
      </ul>
    </div>
    <div class="album-content" style="width:970px">
      <div class="songs-body">
        <!--        歌单歌曲-->
        <SearchContent :songList="collectionList">
          <template slot="title">我的收藏</template>
        </SearchContent>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {mixin} from "@/mixins";
import axios from "axios";
import SearchContent from "@/components/SearchContent";

export default {
  mixins: [mixin],
  name: "MyMusic",
  data() {
    return {}
  },
  components: {
    SearchContent
  },
  mounted() {
    this.getUserMsg()
    this.getCollection()
    //将当前用户收藏数量设置为初始收藏数量
    this.$store.commit('setNumber', localStorage.getItem('collectNumber'));
  },
  computed: {
    ...mapGetters([
      'userMsg',
      'collectionList',
      'number'
    ])
  },
  watch: {
    //监控我的收藏情况,数据有变化就重新查询收藏列表
    number(){
      this.getCollection()
    }
  },
  methods: {
//  根据当前用户id查询用户信息
    getUserMsg() {
      axios.get('/user/select/' + localStorage.getItem('userId')).then(
          response => {
            if (response.data.code == 1) {
              //将用户信息存入缓存
              this.$store.commit('setUserMsg', response.data.user)
            }
          }
      )
    },
    //  根据当前用户id获取到收藏音乐列表
    getCollection() {
      axios.get('/user/getCollect/' + localStorage.getItem('userId')).then(
          response => {
            if (response.data.code == 1) {
              //将用户收藏歌曲信息存入缓存
              this.$store.commit('setCollectionList', response.data.songList)
              //将用户当前收藏数量存入浏览器缓存
              localStorage.setItem('collectNumber', this.collectionList.length)
            }
          }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/my-music";
</style>