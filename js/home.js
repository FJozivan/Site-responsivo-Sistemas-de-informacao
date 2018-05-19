$(".link-boxes").children("span").hide();
$(".link-boxes").hover(function() {
	$(this).children("img").css('opacity', 0.3);
	$(this).children("span").show();
}, function() {
	$(this).children("img").css('opacity', 1);
	$(this).children("span").hide();
});