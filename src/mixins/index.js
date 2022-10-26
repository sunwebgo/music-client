import axios from "axios";


export const mixin = {
    methods:{
        //设置播放器
        toPlay(id,url,name,singerName,picture,index,lyric){
            this.$store.commit('setId',id);
            this.$store.commit('setUrl',this.$store.state.HOST+url);
            this.$store.commit('setPicture',picture);
            this.$store.commit('setName',name);
            this.$store.commit("setSingerName",singerName);
            this.$store.commit('setListIndex',index);
            this.$store.commit('setLyric',this.parseLyric(lyric));
        },
        //  查询用户的收藏情况
        getCollectState(songId) {
            if (songId != null){
                axios.get('/collection/select/' + localStorage.getItem('userId') + '/' + songId).then(
                response =>{
                    if (response.data.code == 1){
                        this.$store.commit('setCollectActive',false)
                    }else{
                        this.$store.commit('setCollectActive',true)
                    }
                }
            )
            }

        },

        //  解析歌词
        parseLyric(text){
            let lines = text.split("\n");
            //定义正则，除去[00:13:42]
            let pattern = /\[\d{2}:\d{2}.(\d{3}|\d{2})\]/g;
            let result = [];
            while (!pattern.test(lines[0])){
                lines = lines.slice(1);
            }
            //遍历每一行
            for (let item of lines){
                let time = item.match(pattern); //存储时间
                let value = item.replace(pattern,''); //存储时间
                for (let item1 of time){
                    let t = item1.slice(1,-1).split(":"); //取出时间
                    if (value != null){
                        result.push([parseInt(t[0],10)*60 + parseFloat(t[1]),value]);
                    }
                }
            }
            result.sort(function (a,b){
                return a[0] - b[0];
            });
            return result;
        },
        //解析图片
        attachImgUrl(url) {
            if (url.length > 0){
                return this.$store.state.HOST + url;
            }else{
                return "";
            }

        },
        //    获取性别
        changeGender(value) {
            if (value == 1) {
                return '男'
            }
            if (value == 2) {
                return '女'
            }
            if (value == 3){
                return '组合'
            }
        },

        //将性别由字符转换为数字
        changeGenders(gender){
            if (gender == '男'){
                return  1;
            }else if(gender == '女'){
                return 2;
            }else{
                return 3;
            }
        },

        //    更改生日类型
        changeBirth(value) {
            return String(value).substr(0, 10);
        },
    }
}