<!--  -->
<template>
<div class="search">
<div class="search-box">
   <van-icon name="search" color="#31c27c" size="20px" />
   <input type="text" placeholder="搜索歌曲 歌手">
</div>
<div class="hotSearch">
     <h1 class="title">热门搜索</h1>
     <div class="girl">
         <div v-for="(v,i) in 12" :key="i" @click="$router.push({
          path: `/search/${i}`,
        })">桥边姑娘</div>
     </div>
</div>
<router-view></router-view>
</div>
</template>

<script>
export default {
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.search{
  position: fixed;
  width: 100%;
  top: 185px;
  bottom: 0;
}
.search-box{
width: 88%;
height: 80px;
line-height: 80px;
margin: 30px auto;
background: #f5f5f5;
position: relative;
padding: 0 20px 0 80px;
box-sizing: border-box;
border-radius: 10px;
}
.search-box>.van-icon{
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 36px!important;
}
.search-box>input{
    height: 40px;
     line-height: 18px;
      outline: none;
      background-color: #f5f5f5;
      border: none;
      font-size: 25px;
}
.hotSearch{
    width: 88%;
    margin: 0 auto;
}
.title{
    margin-bottom: 30px;
    font-size: 32px;
    color: rgba(0,0,0,0.5);
}
.girl>div{
    display: inline-block;
    padding: 10px 20px;
    margin: 0 30px 20px 0;
    background: #f5f5f5;
    border-radius: 10px;
     font-size: 28px;
    color: rgba(0,0,0,0.5);
}
</style>