<!--  -->
<template>
  <div class="music">
    <div class="back">
      <img src="../../common/image/left.png" alt />
    </div>
    <div class="title">抖音热门|希望你后来遇到他</div>
    <div class="bg">
      <div class="filter"></div>
    </div>
    <div class="loading-container">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import loading from "../Loading/Loading";
export default {
  components: {
    loading
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
.music {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
.back {
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  top: 10px;
  background-color: orange;
  z-index: 100;
}
.back > img {
  display: block;
  width: 90%;
  height: 90%;
  border-radius: 50%;
}
.title {
  width: 80%;
  position: absolute;
  left: 10%;
  top: 10px;
  font-size: 30px;
  color: white;
  z-index: 100;
  text-align: center;
}
.bg {
  position: relative;
  background: url("http://p.qpic.cn/music_cover/57K0ggtQKgicFAqXCDHjGRWcOCYoibgTTVgR1SgwHATYuEJZCZ9BCdlw/600?n=1")
    no-repeat;
  background-size: cover;
  background-position: left top;
  width: 100%;
  height: 525px;
}
.filter {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(7, 17, 27, 0.4);
}
.loading-container{
     position: absolute;
        top: 525px;
        width: 100%;
        height: 809px;
        display: flex;
        align-items: center;
}
</style>