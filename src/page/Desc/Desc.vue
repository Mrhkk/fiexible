<!--  -->
<template>
  <div class="desc">
    <div class="box" v-for="(item,index) in 12" :key="index" @click="$router.push({path:'/text'})">
      <div class="left">
        <img src="http://y.gtimg.cn/music/photo_new/T003R300x300M000003sIu8d0Iyhob.jpg" alt />
      </div>
      <div class="right">
        <div v-for="(v,i) in 3" :key="i">
          <span>{{i+1}}</span>
          <span>Mojito</span>
          <span>-周杰伦</span>
        </div>
      </div>
    </div>
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
.desc {
  position: fixed;
  width: 100%;
  top: 185px;
  bottom: 0;
  background: #f5f5f5;
  padding-top: 36px;
  overflow: auto;
}
.box {
  width: 90%;
  background: #ffffff;
  margin: 0 auto;
  height: 200px;
  margin-bottom: 36px;
  display: flex;
}
.left{
    width: 32%;
    height: 200px;
}
.left>img{
    width: 90%;
    height: 100%;
}
.right{
    width: 68%;
    padding: 10px 0;
    font-size: 30px;
}
.right>div{
    overflow: hidden;
    padding: 0px 2px 0px 30px;
     height: 60px;
    line-height: 60px;
    color: #000;

}
.right>div>span:nth-of-type(2n-1){
   color: rgba(0,0,0,0.3);
}
</style>