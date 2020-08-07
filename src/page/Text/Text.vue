<!--  -->
<template>
  <div class="text">
    <div class="back" @click="back">
      <img src="../../common/image/left.png" alt />
    </div>
    <div class="search">
      <h3 class="title">测试</h3>
       <div class="img">
        <img src="../../../static/img/1.jpg" alt="">
    </div>
    </div>
  </div>
</template>

<script>
import Frame_animation from '../../assets/donghua'
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.$store.commit("changeKey");
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
      var paly_img = new Frame_animation({
            el : document.querySelector('.img'),
            url : '../../../static/img/{index}.jpg',
            min : 1,
            max : 5,
        });
        paly_img.play();
  },
  methods: {
    back() {
      this.$store.commit("changeKey");
      this.$router.push("/desc");
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.text {
  position: relative;
  padding-top: 100px;
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
  left: 28px;
  top: 15px;
  background-color: orange;
  z-index: 100;
}
.back > img {
  display: block;
  width: 90%;
  height: 90%;
  border-radius: 50%;
}
.search {
  width: 88%;
  margin: 0 auto;
}
.title {
  margin-bottom: 30px;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.5);
}
.img{
        width: 500px;
        height: 500px;
        border: 1px solid red;
        margin:  0 auto;
    }
    img{
        display: inline-block;
        width: 100%;
    }
</style>
