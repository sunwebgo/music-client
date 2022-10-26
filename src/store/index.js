import Vue from "vue";
//引入Vuex插件
import Vuex from 'vuex'

Vue.use(Vuex)

//准备state，用于存储数据
const state = {
    // 存储后台地址
    HOST: 'http://43.143.117.57:8090',
    songListByKeyWords:[], //搜索列表中的歌曲
    isPlay: false,   //是否播放中
    url: '',         //歌曲地址
    keywords:'',     //用户的输入信息
    id: '',
    playButtonUrl: '#icon-bofang',
    duration: 0,   //音乐时长
    curTime: 0,     //当前音乐播放位置
    changeTime: 0,  //指定播放时刻
    name: '',       //歌名
    singerName: '',  //歌手
    picture: '',     //歌曲图片
    autoNext: true,  //是否自动播放下一首
    lyric: [],       //歌词
    lyr:[],           //解析后的歌词
    listIndex: null, //当前歌曲在歌单中的位置
    volume: 50,       //音量
    showAside:false,  //是否显示播放中的歌曲列表
    loginIn:false,     //用户是否已经登录
    activeName:'',
    userId:'',
    username:'',       //用户名
    userPicture:'',     //用户头像
    userMsg:{},         //用户全部信息
    tempList: {},    //单个歌单/歌手信息
    listOfSongs:[],   //歌单中的歌曲
    average: 0,      //歌单平均分
    collectActive:false,//当前歌曲是否已经收藏
    collectionList:[], //用户的收藏列表
    number:0
}

//准备actions,用于响应组件中的动作
const actions = {}

//准备mutations,用于操作数据
const mutations = {
    setSongListByKeyWords: (state, songListByKeyWords) => {
        state.songListByKeyWords = songListByKeyWords;
        window.sessionStorage.setItem('songListByKeyWords', JSON.stringify(songListByKeyWords));
    },
    setIsPlay: (state, isPlay) => {
        state.isPlay = isPlay;
        window.sessionStorage.setItem('isPlay', JSON.stringify(isPlay));
    },
    setUrl: (state, url) => {
        state.url = url;
        window.sessionStorage.setItem('url', JSON.stringify(url));
    },
    setId: (state, id) => {
        state.id = id;
        window.sessionStorage.setItem('id', JSON.stringify(id));
    },
    setPlayButtonUrl: (state, playButtonUrl) => {
        state.playButtonUrl = playButtonUrl;
        window.sessionStorage.setItem('volume', JSON.stringify(playButtonUrl));
    },

    setDuration: (state, duration) => {
        state.duration = duration;
        window.sessionStorage.setItem('duration', JSON.stringify(duration));
    },
    setCurTime: (state, curTime) => {
        state.curTime = curTime;
        window.sessionStorage.setItem('curTime', JSON.stringify(curTime));
    },
    setChangeTime: (state, changeTime) => {
        state.changeTime = changeTime;
        window.sessionStorage.setItem('changeTime', JSON.stringify(changeTime));
    },
    setName: (state, name) => {
        state.name = name;
        window.sessionStorage.setItem('name', JSON.stringify(name));
    },
    setSingerName: (state, singerName) => {
        state.singerName = singerName;
        window.sessionStorage.setItem('singerName', JSON.stringify(singerName));
    },
    setPicture: (state, picture) => {
        state.picture = picture;
        window.sessionStorage.setItem('picture', JSON.stringify(picture));
    },
    setAutoNext: (state, autoNext) => {
        state.autoNext = autoNext;
        window.sessionStorage.setItem('autoNext', JSON.stringify(autoNext));
    },
    setLyric: (state, lyric) => {
        state.lyric = lyric;
        window.sessionStorage.setItem('lyric', JSON.stringify(lyric));
    },
    setTempList: (state, tempList) => {
        state.tempList = tempList;
        window.sessionStorage.setItem('tempList', JSON.stringify(tempList));
    },
    setListIndex: (state, listIndex) => {
        state.listIndex = listIndex;
        window.sessionStorage.setItem('listIndex', JSON.stringify(listIndex));
    },
    setVolume: (state, volume) => {
        state.volume = volume;
        window.sessionStorage.setItem('volume', JSON.stringify(volume));
    },
    setShowAside: (state, showAside) => {
        state.showAside = showAside;
        window.sessionStorage.setItem('showAside', JSON.stringify(showAside));
    },
    setLyr:(state,lyr) =>{
        state.lyr = lyr;
        window.sessionStorage.setItem('lyr',JSON.stringify(lyr));
    },
    setLoginIn:(state,loginIn) =>{
        state.loginIn = loginIn;
        window.sessionStorage.setItem('loginIn',JSON.stringify(loginIn));
    },
    setActiveName:(state,activeName) =>{
        state.activeName = activeName;
        window.sessionStorage.setItem('activeName',JSON.stringify(activeName));
    },
    setUserId:(state,userId) =>{
        state.userId = userId;
        window.sessionStorage.setItem('userId',JSON.stringify(userId));
    },
    setUsername:(state,username) =>{
        state.username = username;
        window.sessionStorage.setItem('username',JSON.stringify(username));
    },
    setUserPicture:(state,userPicture) =>{
        state.userPicture = userPicture;
        window.sessionStorage.setItem('userPicture',JSON.stringify(userPicture));
    },
    setListOfSongs:(state,listOfSongs) =>{
        state.listOfSongs = listOfSongs;
        window.sessionStorage.setItem('listOfSongs',JSON.stringify(listOfSongs));
    },
    setAverage:(state,average) =>{
        state.average = average;
        window.sessionStorage.setItem('average',JSON.stringify(average));
    },
    setCollectActive:(state,collectActive) =>{
        state.collectActive = collectActive;
        window.sessionStorage.setItem('collectActive',JSON.stringify(collectActive));
    },
    setUserMsg:(state,userMsg) =>{
        state.userMsg = userMsg;
        window.sessionStorage.setItem('collectActive',JSON.stringify(userMsg));
    },
    setCollectionList:(state,collectionList) =>{
        state.collectionList = collectionList;
        window.sessionStorage.setItem('collectionList',JSON.stringify(collectionList));
    },
    setNumber:(state,number) =>{
        state.number = number;
        window.sessionStorage.setItem('number',JSON.stringify(number));
    },
    setKeywords:(state,keywords) =>{
        state.keywords = keywords;
        window.sessionStorage.setItem('number',JSON.stringify(keywords));
    },

}

//类似于vue中的computed，进行缓存，对于Store中的数据进行加工处理形成新的数据
const getters = {
    songListByKeyWords: state => {
        let songListByKeyWords = state.songListByKeyWords;
        return songListByKeyWords;
    },
    isPlay: state => {
        let isPlay = state.isPlay;
        return isPlay;
    },
    url: state => {
        let url = state.url;
        return url;
    },
    id: state => {
        let id = state.id;
        return id;
    },
    playButtonUrl: state => {
        let playButtonUrl = state.playButtonUrl;
        return playButtonUrl;
    },
    autoNext: state => {
        let autoNext = state.autoNext;
        if (!autoNext) {
            autoNext = JSON.parse(window.sessionStorage.getItem("autoNext") || null);
        }
        return autoNext;
    },
    duration: state => {
        let duration = state.duration;
        return duration;
    },
    curTime: state => {
        let curTime = state.curTime;
        return curTime;
    },
    changeTime: state => {
        let changeTime = state.changeTime;
        return changeTime;
    },
    name: state => {
        let name = state.name;
        return name;
    },
    singerName: state => {
        let singerName = state.singerName;
        return singerName;
    },
    picture: state => {
        let picture = state.picture;
        return picture;
    },
    lyric: state => {
        let lyric = state.lyric;
        return lyric;
    },
    lyr: state =>{
      let lyr = state.lyr;
      return lyr;
    },
    tempList: state => {
        let tempList = state.tempList;
        return tempList;
    },
    listIndex: state => {
        let listIndex = state.listIndex;
        return listIndex;
    },
    volume: state => {
        let volume = state.volume;
        return volume;
    },
    showAside: state => {
        let showAside = state.showAside;
        return showAside;
    },
    loginIn: state => {
        let loginIn = state.loginIn;
        return loginIn;
    },
    activeName: state =>{
        let activeName = state.activeName;
        return activeName;
    },
    userId: state => {
        let userId = state.userId;
        return userId;
    },
    username: state => {
        let username = state.username;
        return username;
    },
    userPicture: state => {
        let userPicture = state.userPicture;
        return userPicture;
    },
    listOfSongs: state => {
        let listOfSongs = state.listOfSongs;
        return listOfSongs;
    },
    average: state => {
        let average = state.average;
        return average;
    },
    collectActive: state => {
        let collectActive = state.collectActive;
        return collectActive;
    },
    userMsg: state => {
        let userMsg = state.userMsg;
        return userMsg;
    },
    collectionList: state => {
        let collectionList = state.collectionList;
        return collectionList;
    },
    number: state => {
        let number = state.number;
        return number;
    },
    keywords: state => {
        let keywords = state.keywords;
        return keywords;
    },
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})