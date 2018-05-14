//Funções para exibição e ocultação dos eixos
var exb = false;
var exc = false;
var ext = false;
var exh = false;
$("#eixob").click(function() {
	if(exb == true) {
		exb = false;
		$(".exc").show();
		$(".ext").show();
		$(".exh").show();
	} else {
		exb = true;
		exc = false;
		ext = false;
		exh = false;
		$(".exb").show();
		$(".exc").hide();
		$(".ext").hide();
		$(".exh").hide();
	}
});
$("#eixoc").click(function() {
	if(exc == true) {
		exc = false;
		$(".exb").show();
		$(".ext").show();
		$(".exh").show();
	} else {
		exc = true;
		exb = false;
		ext = false;
		exh = false;
		$(".exc").show();
		$(".exb").hide();
		$(".ext").hide();
		$(".exh").hide();
	}
});
$("#eixot").click(function() {
	if(ext == true) {
		ext = false;
		$(".exc").show();
		$(".exb").show();
		$(".exh").show();
	} else {
		ext = true;
		exc = false;
		exb = false;
		exh = false;
		$(".ext").show();
		$(".exc").hide();
		$(".exb").hide();
		$(".exh").hide();
	}
});
$("#eixoh").click(function() {
	if(exh == true) {
		exh = false;
		$(".exc").show();
		$(".ext").show();
		$(".exb").show();
	} else {
		exh = true;
		exc = false;
		ext = false;
		exb = false;
		$(".exh").show();
		$(".exc").hide();
		$(".ext").hide();
		$(".exb").hide();
	}
});

//Funções para exibição e ocultação dos semestres
var sem1 = false;
var sem2 = false;
var sem3 = false;
var sem4 = false;
var sem5 = false;
var sem6 = false;
var sem7 = false;
var sem8 = false;
$("#sem1").click(function(){
	if(sem1 == true) {
		sem1 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 1)
				continue;
			$(semestre).show();
		}
	} else {
		sem1 = true;
		sem2 = false;
		sem3 = false;
		sem4 = false;
		sem5 = false;
		sem6 = false;
		sem7 = false;
		sem8 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 1) {
				$(semestre).show();
			} else {
				$(semestre).hide();
			}
		}
	}
});
$("#sem2").click(function(){
	if(sem2 == true) {
		sem2 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 2)
				continue;
			$(semestre).show();
		}
	} else {
		sem2 = true;
		sem1 = false;
		sem3 = false;
		sem4 = false;
		sem5 = false;
		sem6 = false;
		sem7 = false;
		sem8 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 2) {
				$(semestre).show();
			} else {
				$(semestre).hide();
			}
		}
	}
});
$("#sem3").click(function(){
	if(sem3 == true) {
		sem3 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 3)
				continue;
			$(semestre).show();
		}
	} else {
		sem3 = true;
		sem2 = false;
		sem1 = false;
		sem4 = false;
		sem5 = false;
		sem6 = false;
		sem7 = false;
		sem8 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 3) {
				$(semestre).show();
			} else {
				$(semestre).hide();
			}
		}
	}
});
$("#sem4").click(function(){
	if(sem4 == true) {
		sem4 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 4)
				continue;
			$(semestre).show();
		}
	} else {
		sem4 = true;
		sem2 = false;
		sem3 = false;
		sem1 = false;
		sem5 = false;
		sem6 = false;
		sem7 = false;
		sem8 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 4) {
				$(semestre).show();
			} else {
				$(semestre).hide();
			}
		}
	}
});
$("#sem5").click(function(){
	if(sem5 == true) {
		sem5 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 5)
				continue;
			$(semestre).show();
		}
	} else {
		sem5 = true;
		sem2 = false;
		sem3 = false;
		sem4 = false;
		sem1 = false;
		sem6 = false;
		sem7 = false;
		sem8 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 5) {
				$(semestre).show();
			} else {
				$(semestre).hide();
			}
		}
	}
});
$("#sem6").click(function(){
	if(sem6 == true) {
		sem6 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 6)
				continue;
			$(semestre).show();
		}
	} else {
		sem6 = true;
		sem2 = false;
		sem3 = false;
		sem4 = false;
		sem5 = false;
		sem1 = false;
		sem7 = false;
		sem8 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 6) {
				$(semestre).show();
			} else {
				$(semestre).hide();
			}
		}
	}
});
$("#sem7").click(function(){
	if(sem7 == true) {
		sem7 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 7)
				continue;
			$(semestre).show();
		}
	} else {
		sem7 = true;
		sem2 = false;
		sem3 = false;
		sem4 = false;
		sem5 = false;
		sem6 = false;
		sem1 = false;
		sem8 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 7) {
				$(semestre).show();
			} else {
				$(semestre).hide();
			}
		}
	}
});
$("#sem8").click(function(){
	if(sem8 == true) {
		sem8 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 8)
				continue;
			$(semestre).show();
		}
	} else {
		sem8 = true;
		sem2 = false;
		sem3 = false;
		sem4 = false;
		sem5 = false;
		sem6 = false;
		sem7 = false;
		sem1 = false;
		for(var i = 1; i < 9; i++){
			var semestre = ".sem"+i;
			if(i == 8) {
				$(semestre).show();
			} else {
				$(semestre).hide();
			}
		}
	}
});