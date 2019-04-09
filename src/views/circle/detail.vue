<template>
  <div class="m-circle-detail-page">
    <h3 class="m-title">{{circle_message.netitle}}</h3>
    <p class="m-time">{{circle_message.createtime}}</p>
    <template v-for="(item,index) in circle_message.netext">
      <ul class="m-img-list" v-if="item.type == 'image'">
        <li v-for="(i,j) in item.content">
          <img :src="i" alt="" @click="previewImg(i)">
        </li>
      </ul>
      <p class="m-text" v-if="item.type == 'text'" v-html="item.content">
      </p>
      <div class="m-video-box" v-if="item.type == 'video'">
        <video :src="item.content.video" id="videoPlay" :poster="item.content.thumbnail" controls="controls" >您的浏览器不支持 video 视频播放</video>
        <!--<div class="m-img-box" @click="playVideo" >-->
          <!--<img :src="item.content.thumbnail" alt="">-->
          <!--<span class="m-play-icon" @click="playVideo"></span>-->
          <!--<span class="m-video-time">{{item.content.duration}}</span>-->
        <!--</div>-->

      </div>

    </template>

    <el-dialog
      :visible.sync="dialogVisible"
      width="90%"
    >

      <img :src="dialogImg" style="display: block;width:100%;" alt="" >
    </el-dialog>


    <!--<div class="m-btn-box">-->
      <!--<span><上一篇</span>-->
      <!--<span class="m-active">下一篇></span>-->
    <!--</div>-->
  </div>
</template>

<script>
  import axios from 'axios';
  import api from '../../api/api'
  export default {
    name: "notice",
    data(){
      return{
        circle_message:{},
        show_video:false,
        dialogImg:'',
        dialogVisible:false
      }
    },
    mounted(){
      document.documentElement.scrollTop=0;
      this.getMessage();
    },
    methods:{
      getMessage(){
        axios.get(api.get_news_content,{
          params:{
            neid:this.$route.query.neid
          }
        }).then(res => {
          if(res.data.status == 200){
            this.circle_message = res.data.data;
          }
        })
      },
      // 播放视频
      playVideo() {
        let vdo = document.getElementById("videoPlay");
        this.show_video = true;
        vdo.play();
      },
      previewImg(i){
        this.dialogVisible = true;
        this.dialogImg = i;
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
