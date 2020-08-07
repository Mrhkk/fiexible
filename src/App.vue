<template>
  <div id="app">
<Head v-if="!$store.state.keyShow"/>
<Tab v-if="!$store.state.keyShow"/>
    <router-view />
  </div>
</template>

<script>
import Head from './page/Head/Head.vue'
import Tab from './page/Tab/Tab.vue'
export default {
  name: "App",
  created(){
  },
  components:{
    Head,
    Tab
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 750px;
  height: 100%;
  background-color: #fff;
  position: relative;
}
.van-swipe__indicator{
width: 20px;
height: 20px;
}
.icon {
  fill: currentColor;
}
</style>
