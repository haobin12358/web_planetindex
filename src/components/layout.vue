<template>
 <div :class="$route.name == 'index'?'m-index-page':''">
   <m-head></m-head>
   <router-view ></router-view>
 </div>

</template>

<script type="text/ecmascript-6">
  import  mHead from './header';
    export default {
      data(){
        return{
          nav_list:[
            {
              name:'首页',
              url:'/',
              value:''
            }
          ]
        }
      },
      components:{mHead},
      props:{
        is_index:{
          type:Boolean,
          default:true
        }
      },
      mounted(){
        console.log(this.$route)
      },
      methods:{

      }

    }
</script>

<style scoped lang="less">
  @import "../style/index";

</style>
