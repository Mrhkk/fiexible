<template>
  <div class="hello">
    <div class="father">
      <div class="text">测试flexible大屏</div>
    </div>
    <div class="second">
      <div class="head">
        <span></span>
        <div>膳食总结</div>
      </div>
      <div class="content">
        <div id="echart1"></div>
        <div class="padding_top">
          <div class="li">
            <span></span>
            <div>碳水化合物：0</div>
          </div>
          <div class="li">
            <span class="span1"></span>
            <div>蛋白质：0</div>
          </div>
          <div class="li">
            <span class="span2"></span>
            <div>脂肪：0</div>
          </div>
        </div>
        <div class="right">
          <div>
            <div>摄入量</div>
            <div>可接受范围</div>
          </div>
          <div>
            <div>0%</div>
            <div>45-65%</div>
          </div>
          <div>
            <div>0%</div>
            <div>10-35%</div>
          </div>
          <div>
            <div>0%</div>
            <div>20-35%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  mounted() {
    this.draw();
  },
  created() {},
  methods: {
    draw() {
      console.log(222222);
      var myChart1 = this.$echarts.init(document.getElementById("echart1"));
      var option = {
        selectedMode: false,
        series: [
          {
            type: "pie",
            radius: ["0%", "90%"],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            labelLine: {
              normal: {
                show: false
              }
            },
            color: ["#8BD3FF", "#9C96EE", "#67DDA5"],
            // data:this.shangshi
            data: [{ value: 335 }, { value: 310 }, { value: 234 }]
          }
        ]
      };
      myChart1.setOption(option);
      /*窗口自适应，关键代码*/
      window.onresize = function() {
        window.location.reload(true);
        myChart1.resize();
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
}
.father {
  width: 100%;
}
.text {
  width: 300px;
  height: 40px;
  line-height: 40px;
  background-color: aquamarine;
  color: rebeccapurple;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
}
.second {
  width: 90%;
  padding: 20px 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 12px 20px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
}
.head {
  position: relative;
}
.head > div {
  font-size: 34px;
  color: #333333;
  font-weight: 900;
  height: 40px;
  line-height: 40px;
  padding-left: 36px;
}
.head > span {
  display: block;
  width: 20px;
  height: 30px;
  background-color: #8bd3ff;
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 5px;
}
.content {
  display: flex;
  margin-top: 30px;
}
#echart1 {
  width: 22%;
  height: 120px;
  padding-top: 20px;
}
.padding_top {
  width: 34%;
  padding-top: 35px;
  margin-left: 15px;
}
.li {
  position: relative;
}
.li > span {
  display: block;
  width: 36px;
  height: 18px;
  background-color: #8bd3ff;
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 5px;
}
.li > div {
  font-size: 22px;
  color: #333333;
  height: 35px;
  line-height: 35px;
  padding-left: 66px;
}
.span1 {
  background-color: #9c96ee !important;
}
.span2 {
  background-color: #67dda5 !important;
}
.right {
  width: 38%;
  font-size: 22px;
  font-weight: normal;
}
.right > div {
  display: flex;
}
.right > div > div:nth-of-type(1) {
  height: 35px;
  line-height: 35px;
  width: 40%;
  text-align: center;
}
.right > div > div:nth-of-type(2) {
  height: 35px;
  line-height: 35px;
  width: 60%;
  text-align: center;
}
</style>
