<template>
  <div id="app">
    <Header></Header>
    <router-view class="music-content"></router-view>
    <SongAudio></SongAudio>
    <PlayBar></PlayBar>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SongAudio from "@/components/SongAudio";
import PlayBar from "@/components/PlayBar";
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    SongAudio,
    PlayBar,
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/css/app.scss";
</style>
