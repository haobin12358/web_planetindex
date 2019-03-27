<template>
    <div class="m-notice-page">
      <h3 class="m-tile">
        <span class="m-title-name">大行星</span>
        <span>公告</span>
      </h3>
      <ul class="m-notice-list">
        <li @click="changeDetail">
          <span class="m-notice-list-title">（1）大行星公告大行星公告大行星公告大行星公告。</span>
          <span>2019/03/11</span>
        </li>
        <li>
          <span class="m-notice-list-title">（1）大行星公告大行星公告大行星公告大行星公告。</span>
          <span>2019/03/11</span>
        </li>
        <li>
          <span class="m-notice-list-title">（1）大行星公告大行星公告大行星公告大行星公告。</span>
          <span>2019/03/11</span>
        </li>
        <li>
          <span class="m-notice-list-title">（1）大行星公告大行星公告大行星公告大行星公告。</span>
          <span>2019/03/11</span>
        </li>
      </ul>

      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "notice",
      methods:{
        changeDetail(){
          this.$router.push('/notice/detail')
        }
      }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
