// 根据屏幕尺寸设置相应根字体大小
  var oHtml = document.getElementsByTagName('html')[0],
    screenWidth = document.documentElement.offsetWidth || document.body.offsetWidth,
    nowFont = 100*screenWidth / 640;
    oHtml.style.fontSize = nowFont+"px";

// 垂直方向swiper,动画
var swiperV = new Swiper('.swiper-container-v', {    
       direction: 'vertical',
       onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
               swiperAnimateCache(swiper); //隐藏动画元素 
               swiperAnimate(swiper); //初始化完成开始动画
             }, 
       onSlideChangeEnd: function(swiper){ 
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
             } 
           
});  
// 水平方向swiper,动画
var swiperH = new Swiper('.swiper-container-h', {   
       direction:'horizontal', 
       pagination: '.swiper-pagination-h',
      //  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
      //          swiperAnimateCache(swiper); //隐藏动画元素 
      //          swiperAnimate(swiper); //初始化完成开始动画
      // }, 
      //  onSlideChangeEnd: function(swiper){ 
      //          swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      // } 
}); 

$("#beginExperience").on('click', function() {
  window.location.href ="html/homepage.html";
});    