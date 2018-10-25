$(document).ready(function(){
	$("form#survey").submit(function(event) {

		event.preventDefault();
		var nameFirst = $("input#inputFirstName").val();
		var nameLast = $("input#inputLastName").val();

		$(".enteredFirstName").text(nameFirst);
		$(".enteredLastName").text(nameLast);


			var inputQuestion1 = parseInt($("input:radio[name=survey1]:checked").val());
			var inputQuestion2 = parseInt($("input:radio[name=survey2]:checked").val());
			var inputQuestion3 = parseInt($("input:radio[name=survey3]:checked").val());
			var inputQuestion4 = parseInt($("input:radio[name=survey4]:checked").val());
			var inputQuestion5 = parseInt($("input:radio[name=survey5]:checked").val());
			var sumSurvey = function (inputQuestion1, inputQuestion2, inputQuestion3, inputQuestion4, inputQuestion5) {
				return inputQuestion1 + inputQuestion2 + inputQuestion3 + inputQuestion4 + inputQuestion5;

			};
			var sum = sumSurvey(inputQuestion1, inputQuestion2, inputQuestion3, inputQuestion4, inputQuestion5);
			if(sum > 5) {
				$(".yesProgramer").show();
				$("#survey").hide();
				$(".tracksToShow").show();
			} else if (sum <= 5) {
				$(".noGo").show();
			} else
			 	$(".noEnter").show();




	});

});
  //
	// 	$("input[type=radio]"). click(function() {
	// 	var total = 0;
  //
	// 	total += parseFloat($(this). val());
	// 	});
	// 	$(".totalSum"). val(total);
	// });






// notes for the morning - try changing input1 bak to value











// $("input[type=radio]:checked"). each(function() {
