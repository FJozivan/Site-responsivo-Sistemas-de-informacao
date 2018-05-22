$("#myInput").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$("#myDIV .cards").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	});
});