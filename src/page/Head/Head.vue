<!--  -->
<template>
  <div class="head">
    <div class="span"><div class="icon"></div>Vue Music</div>
    <div class="mine">登录</div>
  </div>
</template>

<script>
export default {
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
.head {
  position: relative;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #31c27c;
  font-size: 0px;
  /* background-color: blue; */
}
.span > .icon {
  position: absolute;
  left: 40px;
  top: 0;
  width: 62px;
  height: 80px;
  line-height: 80px;
  background: url('../Head/logo@3x.png')no-repeat;
  background-size: 60px 62px;
  background-position: 1px 13px;
}
.head > .span {
  width:300px;
  height: 90px;
  line-height: 90px;
  font-size: 30px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding-left: 40px;
}
.head > .mine {
  width: 130px;
  position: absolute;
  right: 0;
  top: 0;
  height: 90px;
  line-height: 90px;
  font-size: 30px;
}
</style>