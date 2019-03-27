<template>
  <div class="m-top-nav " :class=" $store.state.platform == 'mobile'?'mobile': (is_index?'':'m-not-index')">
    <div class="m-side-bg" v-if="$store.state.platform == 'mobile' && show_side">
      <img src="/static/images/icon-slide.png" class="m-side-more" alt="">
      <ul>
        <li v-for="(item,index) in nav_list" :class="$store.state.select_name == item.name?'active':''" @click="navClick(item,index)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <img v-else-if="$store.state.platform == 'mobile' && !show_side" src="/static/images/icon-slide.png" class="m-side-more m-outside" alt="">
    <ul v-else>
      <li v-for="(item,index) in nav_list" :class="$store.state.select_name == item.name?'active':''" @click="navClick(item,index)">
        {{item.name}}
      </li>
    </ul>
    <span v-if=" $store.state.platform == 'pc'" class="m-supper-btn" @click="changeSupper">·供应商入驻</span>
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
        ],
        show_side:true
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
        this.$store.state.select_name = item.name;
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
        this.$store.state.select_name = '';
        this.$router.push('/supper/index')
      },
    }

  }
</script>

<style scoped lang="less">


</style>
