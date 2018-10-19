var sumYes = function(yes, yes) {
	return yes + yes;
}
var sumNo = function(no, no) {
	return no + no;
}
var totalSumYes = function(sumYes) {
	if (sumYes >= 2) {
		return true;
	}else{
		return false;
	}
var totalSumNo = function(sumNo) {
	if (sumYes >= 2) {
		return true;
	}else{
		return false;
	}
	}
}

$(document).ready(function(){
	$("form#calculator").submit(function() {

		var inputYes = parseInt($("#input1").val());
		var inpoutNo = parseInt($("#input2").val());

		if(totalSumYes) {
			$(".yesProgramer").show();
			$(".noGo").hide();
		} else {
			$(".noGo").show();
			$(".yesProgramer").show();
		}

			event.preventDefault();
