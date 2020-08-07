function  Frame_animation(afferent)  {
    if (!afferent.url) {
        console.error('请传入图片');
        return
    };
    if (!afferent.el) {
        console.error('请传入DOM元素');
        return
    };
    if (!afferent.min) {
        console.error('请传入图片起始位置');
        return
    };
    if (!afferent.max) {
        console.error('请传入图片结束位置');
        return
    };
    this.setime  =  null; //计时器默认是关闭状态
    this.list_arr  =   []; //全部的img标签默认为null
    this.el  =  afferent.el;  //获取到dom元素最后网址而立添加img
    this.max  =  afferent.max; //获取到图片的总量
    this.min  =  afferent.min; //获取到图片的初始值
    this.url  =  afferent.url.split("{index}"); //获取到图片的路径
    this.new_arr  =   []
};
Frame_animation.prototype.img  =   function (i) { //创建img
    var  img  =  new Image(); //每次创建一个img
    img.src  =  '../../../static/img/' + i + '.jpg';
    img.style.display  =  'none';
    return img
};
Frame_animation.prototype.cache  =   function ()  { //创建图片
    if (this.list_arr.length > 1) { return }
    for (let  _ =  this.min; _ < this.max; _++) {
        this.el.appendChild(this.img(_)) //获取到每一个img的标签并且依次添加到父节点中
        this.list_arr.push(this.img(_)) //获取到的每一个img节点push到一个数组中用于进行循环
    }

};
Frame_animation.prototype.play  =   function() { //点击开始图片播放
    if (this.list_arr.length < 1) { this.cache() } //如果没有就创建-如有没有就进行创建
    var  a  =  document.querySelectorAll('img')
    var  s  =  Array.prototype.slice.call(a)
    let  count  =  1 ; //创建一个初始值索引值
    this.setime  =  setInterval(() => {
        if (count == this.max) { count  =  this.min }
        s.map(_ => _.style.display  =  'none');
        s[count - 1].style.display  =  'block'
            ++count;
    }, 1000);
};
Frame_animation.prototype.stop  =   function() {
    if (this.setime) {
        clearInterval(this.setime)
        this.setime  =  null
    }
};
export default Frame_animation