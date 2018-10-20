var sumYes = function(input2, input1) {
	return input2 + input2;
};

var
var sumNo = function(no, no) {
	return no + no;
};

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
	};
};
};

$(document).ready(function(){
	$("form#survey").submit(function() {

		var inputYes = parseInt($("#input1").val());
		var inputNo = parseInt($("#input2").val());

		if(totalSumYes) {
			$(".yesProgramer").show();
			$(".noGo").hide();
		} else {
			$(".noGo").show();
			$(".yesProgramer").show();
		}

			event.preventDefault();
// notes for the morning - try changing input1 bak to value
