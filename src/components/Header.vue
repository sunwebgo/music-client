<template>
  <div class="the-header">
    <!--    网站logo-->
    <div class="header-logo" @click="goIndex">
      <svg t="1658481710437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="2396" width="48" height="48">
        <path
            d="M983.997319 840.997709a39.999891 39.999891 0 0 1-39.999891-39.999891V489.998665c0-225.999384-183.999499-409.998883-409.998883-409.998883h-43.99988C263.999281 79.999782 79.999782 263.999281 79.999782 489.998665v310.999153a39.999891 39.999891 0 0 1-79.999782 0V489.998665A489.998665 489.998665 0 0 1 489.998665 0h43.99988a489.998665 489.998665 0 0 1 489.998665 489.998665v310.999153a39.999891 39.999891 0 0 1-39.999891 39.999891z"
            fill="" p-id="2397"></path>
        <path
            d="M372.998984 1023.99721a85.999766 85.999766 0 0 1-49.999864-15.999956l-113.999689-81.999777a119.999673 119.999673 0 0 1-48.999867-96.999736V687.998125a119.999673 119.999673 0 0 1 48.999867-96.999735l112.999692-80.99978a85.999766 85.999766 0 0 1 89.999754-6.99998 86.999763 86.999763 0 0 1 46.999872 77.999787v354.999033a86.999763 86.999763 0 0 1-46.999872 77.999787 85.999766 85.999766 0 0 1-38.999893 9.999973z m0-450.998771h-2.999992l-113.999689 82.999774a39.999891 39.999891 0 0 0-15.999957 31.999912v140.999616a39.999891 39.999891 0 0 0 15.999957 31.999913l112.999692 80.999779a5.999984 5.999984 0 0 0 5.999983 0.999998 6.999981 6.999981 0 0 0 3.999989-6.999981V580.998417a6.999981 6.999981 0 0 0-3.999989-6.999981z"
            fill="" p-id="2398"></path>
        <path
            d="M119.999673 876.997611a39.999891 39.999891 0 0 1-39.999891-39.999891V679.998147a39.999891 39.999891 0 0 1 79.999782 0v156.999573a39.999891 39.999891 0 0 1-39.999891 39.999891zM650.998226 1023.99721a85.999766 85.999766 0 0 1-38.999893-8.999975 86.999763 86.999763 0 0 1-46.999872-77.999788V580.998417a86.999763 86.999763 0 0 1 46.999872-77.999787 85.999766 85.999766 0 0 1 89.999754 6.99998l112.999692 80.99978a119.999673 119.999673 0 0 1 48.999867 96.999735v140.999616a119.999673 119.999673 0 0 1-48.999867 96.999736l-112.999692 80.999779a85.999766 85.999766 0 0 1-50.999861 16.999954z m0-450.998771h-2.999992a6.999981 6.999981 0 0 0-3.999989 6.999981v355.99903a6.999981 6.999981 0 0 0 3.999989 6.999981 5.999984 5.999984 0 0 0 5.999984-0.999998l112.999692-80.999779a39.999891 39.999891 0 0 0 15.999957-31.999913V687.998125a39.999891 39.999891 0 0 0-15.999957-31.999912l-111.999695-81.999777z"
            fill="" p-id="2399"></path>
        <path
            d="M903.997537 876.997611a39.999891 39.999891 0 0 1-39.999891-39.999891V679.998147a39.999891 39.999891 0 0 1 79.999782 0v156.999573a39.999891 39.999891 0 0 1-39.999891 39.999891z"
            fill="" p-id="2400"></path>
      </svg>
      <i style="margin-left: 5px">imusic</i>
    </div>
    <!--    导航项-->
    <div>
      <ul class="navbar">
        <li v-for="item in navMsg"
            :class="{active : activeName == item.name}"
            :key="item.path"
            @click="goPage(item.name,item.path)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!--    搜索框-->
    <div class="header-search">
      <input type="text" placeholder="请输入歌名 / 歌手名" v-model="keywords" @keydown.enter.native:="goSearch"/>
      <div class="search-btn" @click="goSearch">
        <svg t="1658556260508" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="23981" width="48" height="48">
          <path
              d="M879.358227 793.020348 743.99119 666.456814c37.216623-53.892421 59.010999-119.123075 59.010999-189.418071 0-185.131441-151.051251-335.217714-337.361541-335.217714-186.308243 0-337.361541 150.086274-337.361541 335.217714s151.053298 335.217714 337.361541 335.217714c78.106916 0 150.007479-26.38902 207.188806-70.668503l135.423319 126.581953c20.843724 19.507286 53.717436 18.525935 73.355705-2.223644C901.273353 845.182358 900.256186 812.550147 879.358227 793.020348zM206.295971 477.038744c0-142.531204 116.115578-258.057357 259.344676-258.057357s259.343653 115.527177 259.343653 258.057357c0 142.518924-116.115578 258.057357-259.343653 258.057357S206.295971 619.557668 206.295971 477.038744z"
              p-id="23982"></path>
        </svg>
      </div>
    </div>
    <div>
      <ul class="navbar">
        <li v-show="!loginIn"
            v-for="item in loginMsg"
            :key="item.path"
            @click="goPage(item.name,item.path)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div>
      <ul class="navbar">
        <li v-show="loginIn"
            v-for="item in myMsg"
            :class="{active : activeName == item.name}"
            :key="item.path"
            @click="goPage(item.name,item.path)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="header-right" v-show="loginIn">
      <div id="user">
        <img :src='this.attachImgUrl(userPicture)'>
      </div>
      <!--      下拉列表-->
      <el-dropdown :hide-on-click="false" class="user-name" placement="bottom">
        <span class="el-dropdown-link">
<!--          用户名-->
          {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="personCenter">
                个人中心
              </span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="exitLogin">
                退出登录
              </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {mixin} from "@/mixins";

export default {
  mixins: [mixin],
  name: "Header",
  data() {
    return {
      navMsg: [
        {name: '首页', path: '/'},
        {name: '歌单', path: '/songList'},
        {name: '歌手', path: '/singer'},
      ],
      loginMsg: [
        {name: '登录', path: '/login'},
      ],
      myMsg: [
        {name: '我的音乐', path: '/myMusic'},
      ],
      keywords: '',

    }
  },
  computed: {
    ...mapGetters([
      'loginIn',
      'activeName',
      'username',
      'userPicture'
    ]),
  },

  created() {
    this.refreshSet()
  },

  methods: {
    goIndex() {
      this.$router.push({name:'index'})
      this.activeName = '首页'
    },

    //判断当前浏览器本地存储中是否存在用户信息，若存在则显示用户为登录状态,并将用户信息回显
    refreshSet() {
      if (localStorage.getItem('username') != null) {
        this.$store.commit('setLoginIn', true);
        this.$store.commit('setUsername',localStorage.getItem('username'))
        this.$store.commit('setUserPicture',localStorage.getItem('userPicture'))
      }
    },

    //导航栏页面跳转
    goPage(name, path) {
      this.$store.commit('setActiveName', name)
      this.$router.push({path: path})
    },
    //转向搜索页面
    goSearch() {
      if (this.keywords.trim().length > 0) {
        this.$router.push({name: 'search', query: {keywords: this.keywords}});
        //搜索完毕后刷新搜索页面路由
        this.$router.go(0)
      } else {
        //输入为空给出提示信息
        this.$message({
          type: 'error',
          center: true,
          message: '输入不能为空',
          duration: 1000
        });
      }
    },
    //个人中心
    personCenter() {
      this.$router.push({name: 'personCenter'})
    },
    //  退出登录
    exitLogin() {
      //跳转到首页
      this.$router.push({name: 'index'})
      this.$message({
        type: 'success',
        center: true,
        message: "退出成功",
        duration:1000
      });
      //退出清除用户在浏览器的本地存储
      localStorage.removeItem('userId')
      localStorage.removeItem('username')
      localStorage.removeItem('userPicture')
      localStorage.removeItem('tempList')
      localStorage.removeItem('collectNumber')
      this.$router.go(0)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/css/the-header.scss';

.el-dropdown-link {
  color: #67757f;
  font-size: 18px;
  font-weight: bolder;
}

.user-name {
  cursor: pointer;
}
</style>