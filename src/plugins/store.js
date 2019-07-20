import Vue from 'vue';
import vuex from 'vuex';

// console.log('Vuex',Vuex);//{Store,mapActions,mapGetters}
Vue.use(vuex)


import actions from './store/actions'
import mutations from './store/mutations'
import getters from './store/getters'
import state from './store/state'

//实例化store对象
// let store = new Vuex.Store({配置});
let store = new vuex.Store({
  // key:value
  // key含有(actions,mutations,getters,state) 要的一个对象
  actions,mutations,getters,state
});

export default store