<template>
  <div class="m-top-nav " :class="is_index?'':'m-not-index'">
    <ul>
      <li v-for="(item,index) in nav_list" :class="item.click?'active':''" @click="navClick(item,index)">
        {{item.name}}
      </li>
    </ul>
    <span class="m-supper-btn" @click="changeSupper">·供应商入驻</span>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        nav_list:[
          {
            name:'首页',
            url:'/',
            value:'index',
            click:true
          },
          {
            name:'大行星介绍',
            url:'introduce',
            value:'introduce',
            click:false
          },
          {
            name:'前往商城',
            url:'product',
            value:'product',
            click:false
          },
          {
            name:'行星圈子',
            url:'circle',
            value:'circle',
            click:false
          },
          {
            name:'合作伙伴',
            url:'partner',
            value:'partner',
            click:false
          },
          {
            name:'公司公告',
            url:'/notice/index',
            value:'notice',
            click:false
          },
          {
            name:'在线留言',
            url:'message',
            value:'message',
            click:false
          },
          {
            name:'联系方式',
            url:'/contact',
            value:'contact',
            click:false
          }
        ]
      }
    },
    props:{
      is_index:{
        type:Boolean,
        default:true
      }
    },
    mounted(){

    },
    methods:{
      navClick(item,index){
        for(let i in this.nav_list){
          this.nav_list[i].click = false;
        }
        this.nav_list[index].click = true;
        if(item.url.indexOf('/') > -1){
          this.$router.push(item.url)
        }else{
          if(this.$route.name != 'index'){
            this.$router.push({path:'/index',query:{id:item.value}});
          }else{
            document.getElementById(item.value).scrollIntoView();
          }
        }
      },
      changeSupper(){
        this.$router.push('/supper/index')
      }
    }

  }
</script>

<style scoped lang="less">
  @import "../style/index";
  .m-top-nav{
    position: absolute;
    top:0;
    z-index: 1000;
    font-size: 20px;
    width: 100%;
    padding: 0 40px 0 100px;
    height: 80px;
    line-height: 60px;
    color: #fff;
    .flex-row(space-between);
    background-color: rgba(0,0,0,0.5);
    ul{
      .flex-row(flex-start);
      li{
        margin-right: 60px;
        cursor: pointer;
        &.active{
          font-weight: bold;
        }
      }
    }
    .m-supper-btn{
      display: block;
      width: 300px;
      height: 60px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .m-index-page{
    .m-top-nav{
      background-color: transparent;
      .m-supper-btn{
        display: block;
        width: 300px;
        height: 60px;
        font-size: 30px;
        border: 3px solid #fff;
        border-radius: 60px;
        cursor: pointer;
      }
    }
  }
</style>
