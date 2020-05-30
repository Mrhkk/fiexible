<!--  -->
<template>
<div class="swiper">
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item  v-for="(v,i) in imgarr" :key="i"><img  v-lazy="v"></van-swipe-item>
</van-swipe>
</div>
</template>

<script>
export default {
    props:{
        imgarr:{
            type:Array,
            required:true
        }
    },
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
.swiper{
    width: 100%;
    height: 280px;
}
.my-swipe{
    height: 280px;
}
img{
    width: 100%;
    height: 100%;
}
</style>