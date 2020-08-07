<!--  -->
<template>
  <div class="single">
    <ul @scroll="scroll" id="ul">
      <li v-for="(group,i) in singleL" class="list-group" :key="i">
        <h1 class="list-group-title" :id="i==0?'rh1':group.title+'h1'">{{ group.title }}</h1>
        <ul>
          <li v-for="(item,i) in group.items" :key="i" class="list-group-item">
            <img class="avatar" v-lazy="item.avatar" />
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li
          v-for="(item, index) in shortcutList"
          :key="index"
          class="item"
          :class="{'current': currentIndex === index}"
          @click="goAnchor((item+'h1'),index)"
        >{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSingerList } from "../../api/singer";
import { ERR_OK } from "../../api/config";
import List from "../../Data/List.json";
import Singer from "../../common/js/singer";
const HOT_NAME = "热门";
const HOT_SINGER_LEN = 10;
export default {
  data() {
    return {
      singleL: [],
      currentIndex: 0,
      Topval:[]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.singleL = List;
    this.singleL = this._normalizeSinger(this.singleL);
    console.log(this.singleL);
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
     let pageEle = document.getElementsByClassName("list-group"); //当前元素
      for (let i = 0; i < pageEle.length; i++) {
        this.Topval.push(pageEle[i].offsetHeight);
      }
       console.log(this.Topval);
      // this.currentIndex = this.getMinIndex(Topval);
  },
  computed: {
    shortcutList() {
      return this.singleL.map(group => {
        return group.title.substr(0, 1);
      });
    }
  },
  methods: {
    scroll() {
      let s=0;
       let ul = document.getElementById("ul"); //父级
     this.Topval.forEach((v,i)=>{
       console.log(v)
        s+=v;
        if(s>ul.scrollTop&&(s-v)<=ul.scrollTop){
           this.currentIndex=i
        }
        console.log(this.currentIndex,1111);
       })
    },
    getMinIndex(arr) {
      var min = arr[0];
      //声明了个变量 保存下标值
      var index = 0;
      for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
          index = i;
        }
      }
      return index;
    },
    goAnchor(selector, i) {
      this.currentIndex = i;
      if (i == 0) {
        document.getElementById("rh1").scrollIntoView({
          behavior: "smooth", // 平滑过渡
          block: "start" // 上边框与视窗顶部平齐。默认值
        });
      } else {
        document.getElementById(selector).scrollIntoView({
          behavior: "smooth", // 平滑过渡
          block: "start" // 上边框与视窗顶部平齐。默认值
        });
      }
    },
    getData(el, name, val) {
      const prefix = "data-";
      name = prefix + name;
      if (val) {
        return el.setAttribute(name, val);
      } else {
        return el.getAttribute(name);
      }
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(
            new Singer({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            })
          );
        }
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push(
          new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          })
        );
      });
      // 通过处理map得到有序数组
      let hot = [];
      let ret = [];
      for (let key in map) {
        let val = map[key];
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val);
        } else if (val.title === HOT_NAME) {
          hot.push(val);
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return hot.concat(ret);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.single {
  position: fixed;
  width: 100%;
  top: 185px;
  bottom: 0;
}
.single > ul {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.list-group {
  padding-bottom: 50px;
}

.list-group-title {
  padding-left: 30px;
  height: 80px;
  line-height: 80px;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.5);
  background: #f5f5f5;
}

.list-group-item {
  display: flex;
  align-items: center;
  padding: 40px 0 0 60px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.name {
  margin-left: 40px;
  font-size: 26px;
  color: rgba(0, 0, 0, 0.5);
}

.list-shortcut {
  position: absolute;
  z-index: 30;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  padding: 20px 0;
  border-radius: 50px;
  text-align: center;
  background: #f5f5f5;
  font-family: Helvetica;
}

.item {
  padding: 5px 10px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.5);
  font-size: 30px;
}
.current {
  color: #31c27c;
}
</style>