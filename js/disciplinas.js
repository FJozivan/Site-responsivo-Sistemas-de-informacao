$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

function close() {
	$(".course").hide();
	$("#course-description-tip").show();
}
function repetitions(id) {
	$(".course").hide();
	$(id).show();
	$(document).scrollTop( $("#course-description").offset().top );
}
close();
$(".close").click(function() {
	close();
});
$("#calculo").click(function() {
	repetitions("#course-description-calculo");
});
$("#discreta").click(function() {
	repetitions("#course-description-discreta");
});
$("#bdi").click(function() {
	repetitions("#course-description-bdi");
});
$("#bdii").click(function() {
	repetitions("#course-description-bdii");
});
$("#estatistica").click(function() {
	repetitions("#course-description-estatistica");
});
$("#ia").click(function() {
	repetitions("#course-description-ia");
});
$("#cg").click(function() {
	repetitions("#course-description-cg");
});
$("#contabilidade").click(function() {
	repetitions("#course-description-contabilidade");
});
$("#ingles").click(function() {
	repetitions("#course-description-ingles");
});