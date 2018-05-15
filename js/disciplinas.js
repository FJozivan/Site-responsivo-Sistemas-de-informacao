$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

function close() {
	$(".course").hide();
	$("#course-description-tip").show();
}
close();
$(".close").click(function() {
	close();
});
$(".course-clicks td").click(function() {
	var id = $(this).attr('id');
	$(".course").hide();
	$("#course-description-"+id).show();
	$(document).scrollTop( $("#course-description").offset().top );
});