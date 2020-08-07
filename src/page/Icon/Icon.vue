<!--  -->
<template>
  <div class="icon1">
    <h3 class="title">测试icon{{ Number($route.params.id) + 1 }}</h3>
    <div class="iconBox">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="className"></use>
      </svg>
       <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hongqi"></use>
      </svg>
       <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-plant-"></use>
      </svg>
       <svg class="icon" aria-hidden="true" v-for="(v,i) in 19" :key="i">
        <use :xlink:href="'#icon-plant-'+(i+1)"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      className:'#icon-boluo'
    };
  },
  computed: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.icon1 {
  width: 88%;
  margin: 0 auto;
}
.iconBox{
  height: 500px;
  overflow: auto;
}
.icon{
  width: 22%;
  height: 128px;
}
.title {
  margin-bottom: 30px;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.5);
}
</style>
