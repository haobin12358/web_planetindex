<template>
  <div class="m-top-nav " :class="[{'fixed':$store.state.navBar_fixed},{'mobile':$store.state.platform }, {'m-not-index':is_index}]">
    <div class="m-side-bg" v-if="$store.state.platform == 'mobile' && show_side">
      <img src="/static/images/icon-slide.png" class="m-side-more" alt="" @click="changeSide">
      <ul>
        <li v-for="(item,index) in nav_list" :class="$store.state.select_name == item.name?'active':''" @click="navClick(item,index)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <img v-else-if="$store.state.platform == 'mobile' && !show_side" src="/static/images/icon-slide.png" class="m-side-more m-outside" alt="" @click="changeSide">
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
        nav_list:this.$store.state.nav_list,
        show_side:false
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
          console.log(location)
          if(item.url == '/' ){
            document.documentElement.scrollTop=0;
          }
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
      changeSide(){
        this.show_side = !this.show_side;
        console.log(this.show_side)
      }
    }

  }
</script>

<style scoped lang="less">


</style>
