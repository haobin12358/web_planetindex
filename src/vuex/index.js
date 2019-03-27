import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

let store= new Vuex.Store({
  state: {
    platform:'pc',
    select_name:'首页'
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
