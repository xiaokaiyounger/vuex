<template>
  <div id="app">
    <h3>vuex</h3>
    <input type="button" value="按钮" @click="jia(1)">
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

  /* methods:{
    jia(){
      this.$store.dispatch('jia',1)//->actions
    }
  }, */

  methods:mapActions([
    'jia'
  ]),

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
