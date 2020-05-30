<!--  -->
<template>
  <nav class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </nav>
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
nav{
  display: block;
}
.tab {
  display: flex;
  height: 80px;
  line-height: 80px;
  font-size: 28px;
  margin-top: 20px;
}

.tab-item {
  flex: 1;
  text-align: center;
}

.tab-link {
  padding-bottom: 5px;
  color: #000;
}

.router-link-active .tab-link {
  color: #31c27c;
  border-bottom: 6px solid #31c27c;
}
</style>