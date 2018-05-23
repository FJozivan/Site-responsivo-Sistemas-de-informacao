$("#myInput").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$(".cards-div").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	});
});
// $(".contatos").hide();
$(".btn_show").hover(function(){
	$(".contatos").toggle(10000);
});