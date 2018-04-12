$("#btnprojetos").click(function() {
	$("#publicacoes").collapse("hide");
	$("#pesquisadores").collapse("hide");
});
$("#btnpublicacoes").click(function() {
	$("#projetos").collapse("hide");
	$("#pesquisadores").collapse("hide");
});
$("#btnpesquisadores").click(function() {
	$("#projetos").collapse("hide");
	$("#publicacoes").collapse("hide");
});