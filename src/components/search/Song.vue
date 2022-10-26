<template>
  <div class="search-songs">
      <SearchContent :songList="songList"></SearchContent>
  </div>
</template>

<script>
import SearchContent from "@/components/SearchContent";
export default {
  name: "Song",
  components: {SearchContent},
  props:['songList']
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/search-songs.scss";
</style>