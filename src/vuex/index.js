import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

let store= new Vuex.Store({
  state: {
    platform:'pc',
    select_name:'首页',
    navBar_fixed:false,
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
        url:'telephone',
        value:'telephone',
        click:false
      }
    ]
  },
  mutations: {
    add(state,route) {
      state.tabbar_select=route;
    },
    remove(state,name){
      Vue.delete(state.route,name)
      // delete state.route[name]

      // this.$store.commit('remove',name)调用此方法
    }
  }
});


export default store
