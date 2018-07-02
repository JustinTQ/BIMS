/**
 * Created by asus-pc on 2018/6/25.
 */
require('bootstrap');
require('../css/index.css');

//点击导航加载页面
$(function(){
   $('.collapse li').on("click",function(){
       let target = this.dataset.target;
       $.get(target,function(data){
           $(".mainContent").html(data);
       })
    });

});

