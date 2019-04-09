<template>
    <div class="m-notice-page">
      <h3 class="m-tile">
        <span class="m-title-name">大行星</span>
        <span>公告</span>
      </h3>
      <ul class="m-notice-list">
        <li @click="changeDetail(item)" v-for="(item,index) in notice_list">
          <span class="m-notice-list-title">（{{index+1}}）{{item.cmtitle}}。</span>
          <span>{{item.createtime.slice(0,10)}}</span>
        </li>
      </ul>
      <el-pagination
        layout="total,prev, pager, next"
        :total="total_page"
        :page-sizes="[10]"
      @current-change="changePage"
      >
      </el-pagination>
    </div>
</template>

<script>
  import axios from 'axios';
  import api from '../../api/api'
    export default {
        name: "notice",
      data(){
          return{
            page_info:{
              page_num:1,
              page_size:10
            },
            notice_list:[],
            total_page:0
          }
      },
      mounted(){
          this.getList();
      },
      methods:{
        changeDetail(item){
          this.$router.push({path:'/notice/detail',query:{
              cmid:item.cmid
            }})
        },
        getList(){
          axios.get(api.club_list,{
            params:{
              page_num:this.page_info.page_num,
              page_size:this.page_info.page_size,
              cmindex:2
            }
          }).then(res => {
              if(res.data.status == 200){
                this.notice_list = res.data.data;
                this.total_page = res.data.total_count;
              }
          })
        },
        changePage(num){
          this.page_info.page_num = num;
          this.getList();
        }
      }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
