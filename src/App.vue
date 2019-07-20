<template>
  <div id="app">
    <h3>vuex</h3>
    <input type="button" value="+" @click="INCREMENT(1)">
    <input type="button" value="-" @click="DECREMENT(12)">
    <input type="button" value="odd+" @click="odd(1)">
    <input type="button" value="yibu+" @click="yibu">
    <hr>
    {{ count }}
    
    <hr>

    <input type="button" value="按钮" @click="show">
    <hr>
    {{msg}}

  </div>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'
import {INCREMENT,DECREMENT} from './plugins/store/types.js'
export default {
  name: 'app',

  data(){
    return {
      msg:'组件内部数据'
    }
  },

  methods:{
    ...mapActions([
      INCREMENT,DECREMENT,'odd','yibu'
    ]),
    show(){this.msg='修改后的组件内部数据'}
  },



  /* computed:{
    count(){
      return this.$store.state.count;
    }
  } */

  computed:mapGetters([
    'count'
  ])

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
