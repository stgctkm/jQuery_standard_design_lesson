$(function(){
	// ブラウザをスクロール
	$(window).scroll(function(){
		// ナビゲーションの新しい位置を計算
		$("nav").stop().animate({"top" : $(window).scrollTop() + 100}, 500);
	});
});