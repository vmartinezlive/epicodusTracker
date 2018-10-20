
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
