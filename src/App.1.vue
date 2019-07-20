<template>
  <div id="app">
    <h3>vuex</h3>
    <input type="button" value="按钮" @click="jia">
    <hr>
    <!-- {{ count }} -->
    <!-- {{ this.$store.state.count }} -->
    {{ count }}

  </div>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'app',

  methods:{
    jia(){

      //发送请求 给  actions  dispatch/mapActions

      // console.log(this.$store)
      // this.$store.dispatch(请求类型,负载,配置)

      this.$store.dispatch('jia',1)//->actions

      // this.$store.commit('increment',2)//->mutations

      // mapActions
      // console.log(mapActions)
      

    }
  },

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
