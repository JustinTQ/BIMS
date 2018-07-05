/**
 * Created by asus-pc on 2018/6/25.
 */
require('../css/index.css');

//点击导航加载页面
$(function(){
    $('a','#myPanel').on('click',function(){
        let $nextUl = $(this).next('ul');
        let $ul = $('ul','#myPanel');
        let $navShow = $('.navShow','#myPanel');
        if ($nextUl.css('display') === "none") {
            //展开未展开
            $ul.slideUp(300);
            $navShow.removeClass('navShow');
            $nextUl.slideDown(300);
            $(this).children('.itemTag').addClass('navShow');
        }else{
            //收缩已展开
            $nextUl.slideUp(300);
            $navShow.removeClass('navShow');
        }
    });

    $('#myPanel ul li').on("click",function(){
       let target = this.dataset.target;
       $.get(target,function(data){
           $(".mainContent").html(data);
       })
    });

});

