<template>
  <div id="app">
<Head/>
<Tab/>
    <router-view />
  </div>
</template>

<script>
import Head from './page/Head/Head.vue'
import Tab from './page/Tab/Tab.vue'
export default {
  name: "App",
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
}
.van-swipe__indicator{
width: 20px;
height: 20px;
}
</style>
