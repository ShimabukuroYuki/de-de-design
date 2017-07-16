$(function(){
	$('.grid').masonry({
	  itemSelector: '.grid-item'
	});

//画像にマウスを乗せたら発動
  $('img').hover(function() {
 
    //画像のsrc属性が別画像のパスに切り替わる
    $(this).attr('src', 'image/logo.jpg');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //画像のsrc属性を元の画像のパスに戻す
    $(this).attr('src', 'image/logo-blackandwhite.jpg');
 
  });


});