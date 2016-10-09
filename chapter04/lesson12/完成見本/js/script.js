$(function(){
	// li要素をマウスオーバー
	$("li").hover(function(){
		// キャプション部分の追加
		$(this).append("<div><p>" + $(this).children("img").attr("alt") + "</p></div>");

		// キャプション部分の表示：フェードイン
		$(this).children("div").stop().fadeIn(300);
		
		// キャプションのテキスト位置：10pxから0pxへ移動
		$(this).children("div").children("p").stop().animate({"top" : 0}, 300);

	}, function(){
		// キャプション部分の非表示：フェードアウト
		$(this).children("div").stop().fadeOut(300);

		// キャプションのテキスト位置：0pxから10pxへ移動
		$(this).children("div").children("p").stop().animate({"top":"10px"}, 300, function(){
			$(this).parent("div").remove();
		});

	});

});