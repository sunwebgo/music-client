import VueRouter from "vue-router";
import Index from "../pages/Index"
import Singer from "../pages/Singer"
import MyMusic from "@/pages/MyMusic";
import SearchPage from "@/pages/SearchPage";
import Vue from "vue";
import LyricPage from "@/pages/LyricPage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import PersonCenter from "@/pages/PersonCenter";
import SongListDisplay from "@/pages/SongListDisplay";
import SingerDisplay from "@/pages/SingerDisplay";
import SongList from "@/pages/SongList";
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'index',
            component:Index
        },
        {
            path:'/singer',
            name:'singer',
            component:Singer
        },
        {
            path:'/songList',
            name:'songList',
            component:SongList
        },
        {
            path:'/myMusic',
            name:'myMusic',
            component:MyMusic
        },
        {
            path:'/search',
            name:'search',
            component:SearchPage
        },
        {
            path:'/lyric',
            name:'lyric',
            component:LyricPage
        },

        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/register',
            name:'register',
            component:Register
        },
        {
            path:'/personCenter',
            name:'personCenter',
            component:PersonCenter
        },
        {
            path:'/songListDisplay',
            name:'songListDisplay',
            component:SongListDisplay
        },
        {
            path:'/singerDisplay',
            name:'singerDisplay',
            component:SingerDisplay
        },
    ]
})
