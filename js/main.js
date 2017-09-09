$(function(){


  $('.grid').imagesLoaded(function(){
    $('.grid').masonry({
        itemSelector: '.grid-item'
    });
  })
	
  function slideAnimation(){
    $('.top-slide-container').addClass('animated slideInLeft');
    setTimeout(function(){
      $('.top-slide-logo').addClass('animated fadeIn');
    },2000);

    setTimeout(function(){
       $('.top-slide-container').removeClass('slideInLeft');
       $('.top-slide-container').addClass('slideOutLeft');

        setTimeout(function(){
          $('.container, .address, .sns, .top-logo').addClass('animated fadeIn');
        },1500);
    },3000);
  }

  slideAnimation()

   
});