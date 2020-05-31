<!--  -->
<template>
  <div class="recommend">
    <router-view v-if="$store.state.show"></router-view>
    <div class="scontainer" v-if="!$store.state.show">
      <Swiper :imgarr="recommends" />
    </div>
    <div class="title" v-if="!$store.state.show">热门歌单介绍</div>
    <div class="sroll" v-if="!$store.state.show">
      <div class="songdesc" v-for="(v,i) in 12" :key="i" @click="skip(i)">
        <div class="left">
          <img
            src="http://p.qpic.cn/music_cover/r9Js18hQauaHlf3udYvKsmXeRUiaSfh9gn4XkYM1OGdtwmWZAKgAHlA/600?n=1"
          />
        </div>
        <div class="right">
          <div class="name">经典怀旧女声：时过境迁往事已成云烟</div>
          <div class="txt">玫瑰王</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../page/swiper/Swiper.vue";
import { getRecommend, getDiscList } from "../api/recommend";
import { ERR_OK } from "../api/config";
export default {
  data() {
    return {
      recommends: [],
      discList: []
    };
  },
  components: {
    Swiper
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.recommends = [
      "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2482639.jpg",
      "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2482926.jpg",
      "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2462249.jpg",
      "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2482153.jpg",
      "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2479576.jpg"
    ];
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    skip(i){
      this.$store.commit("isShow");
     this.$router.push({
          path: `/recommend/${i}`,
        })

    },
    _getRecommend() {
      // 通过axios抓取数据
      getRecommend().then(res => {
        console.log(res);
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list;
        }
      });
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.recommend {
  position: fixed;
  width: 100%;
  top: 185px;
  bottom: 0;
  overflow-y: auto;
}
.scontainer {
  width: 100%;
  height: 280px;
}
.title {
  height: 100px;
  line-height: 100px;
  font-size: 28px;
  font-weight: 500;
  color: #31c27c;
  text-align: center;
}
.songdesc {
  display: flex;
  padding: 0 30px 30px;
  box-sizing: border-box;
  font-size: 26px;
}
.songdesc > .left {
  width: 135px;
  padding-right: 15px;
}
.left > img {
  width: 120px;
  height: 120px;
}
.songdesc > .right {
  flex: 0 0 1;
}
.right > .name {
  height: 60px;
  line-height: 60px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.right > .txt {
  height: 60px;
  line-height: 60px;
  color: rgba(0, 0, 0, 0.3);
}
.sroll {
  overflow-y: auto;
}
</style>