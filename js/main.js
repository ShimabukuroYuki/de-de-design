$(function(){
	$('.grid').masonry({
	  itemSelector: '.grid-item'
	});

  $('#img').hover(function() {
    $(this).attr('src', 'image/logo.jpg');
  }, function() {
    $(this).attr('src', 'image/logo-blackandwhite.jpg');
  });

  function slideAnimation(){
    $('.top-slide-container').addClass('animated slideInLeft');
    setTimeout(function(){
      $('.top-slide-logo').addClass('animated fadeIn');
    },1500);

    setTimeout(function(){
       $('.top-slide-container').removeClass('slideInLeft');
       $('.top-slide-container').addClass('slideOutLeft');
    },3000);
  }

  slideAnimation()
});