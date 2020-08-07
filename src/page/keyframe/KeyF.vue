<!--  -->
<template>
  <div class="key">
    <div class="back" @click="back">
      <img src="../../common/image/left.png" alt />
    </div>
    <div id="loading-data">
      <!--<button @click=" show = !show">更改状态</button>-->
      <div id="img_father">
        <img id="img_move" src="./icon_loading.png" alt :style="{bottom: bottom+'px'}" />
      </div>
      <span id="img-shadow"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottom: 0,
      timer: ""
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.timer = setInterval(() => {
      this.lunBo();
    }, 800);
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    back(){
      this.$store.commit('changeKey')
      this.$router.push('/recommend')
    },
    lunBo() {
      if (this.bottom > -300) {
        this.bottom -= 50;
      } else {
        this.bottom = 0;
      }
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.key {
  width: 100%;
  height: 100%;
}
@keyframes shadowScale {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(0.6);
  }
  60% {
    transform: scale(0.4);
  }
  80% {
    transform: scale(0.2);
  }

  100% {
    transform: scale(0);
  }
}
@keyframes imgFatherMove {
  100% {
    transform: translateY(-40px);
  }
  80% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(0px);
  }
  40% {
    transform: translateY(20px);
  }
  20% {
    transform: translateY(40px);
  }

  0% {
    transform: translateY(60px);
  }
}
#loading-data {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.09);
  position: absolute;
  /*padding-top:80%;*/
  /*padding-left:35%;*/
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
#loading-data > div {
  position: absolute;
  right: 42%;
  top: 30%;
  width: 100px;
  height: 100px;
  overflow: hidden;
}
#loading-data > div > img {
  position: absolute;
  /*bottom:0;*/
  width: 100px;
}
#img-shadow {
  position: absolute;
  top: 45%;
  left: 40%;
  width: 200px;
  height: 80px;
  border-radius: 50%;
  background-color: lightgray;
  border: 1px solid lightgray;
  animation: shadowScale 0.4s infinite alternate;
}
#img_father {
  animation: imgFatherMove 0.4s infinite alternate;
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
</style>