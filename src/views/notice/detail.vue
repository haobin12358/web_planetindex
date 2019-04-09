<template>
  <div class="m-circle-detail-page" v-if="message_info">
    <h3 class="m-title">{{message_info.cmtitle}}</h3>
    <p class="m-time">{{message_info.createtime}}</p>
    <div class="m-quill-box" v-html="message_info.cmmessage">
    </div>

    <div class="m-btn-box">
      <span class="m-active" v-if="message_info.before.CMid" @click="changeContent(message_info.before.CMid)"><上一篇</span>
      <span  v-else><上一篇</span>
      <span class="m-active" @click="changeContent(message_info.after.CMid)">下一篇></span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import api from '../../api/api'
  export default {
    name: "notice",
    data(){
      return{
        message_info:null
      }
    },
    mounted(){
      document.documentElement.scrollTop=0;
      this.getMessage();
    },
    methods:{
      getMessage( id ){
        axios.get(api.club_message,{
          params:{
            cmid: id || this.$route.query.cmid
          }
        }).then(res => {
          if(res.data.status == 200){
            this.message_info = res.data.data;
          }
        })
      },
      changeContent(id){
        this.getMessage( id );
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
