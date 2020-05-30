<!--  -->
<template>
  <div class="loading">
    <img src="./loading.gif" />
    <p class="desc">{{ title }}</p>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'正在加载'
        }
    },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.loading {
  width: 100%;
  text-align: center;
}
.loading > img {
  width: 36px;
  height: 36px;
}
.desc {
  height: 32px;
  line-height: 32px;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.5);
}
</style>