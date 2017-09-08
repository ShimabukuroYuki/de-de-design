$(function(){
	$('.grid').masonry({
	  itemSelector: '.grid-item'
	});


  $('#img').hover(function() {
    $(this).attr('src', 'images/logo.jpg');
  }, function() {
    $(this).attr('src', 'images/logo-blackandwhite.jpg');
  });

  function slideAnimation(){
    $('.top-slide-container').addClass('animated slideInLeft');
    setTimeout(function(){
      $('.top-slide-logo').addClass('animated fadeIn');
    },2000);

    setTimeout(function(){
       $('.top-slide-container').removeClass('slideInLeft');
       $('.top-slide-container').addClass('slideOutLeft');

        setTimeout(function(){
          $(".navbar,.container").addClass('animated fadeIn');
        },1500);
    },3000);
  }

  slideAnimation()

   // #で始まるアンカーをクリックした場合に処理
   $('.navbar-menu li a').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href = $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

});