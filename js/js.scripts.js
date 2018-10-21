
var nameFirst = $("input#inputFirstName").val();
var nameLast = $("input#inputName").val();


$(document).ready(function(){
	$("form#survey").submit(function(event) {
		event.preventDefault
		$(".enteredFirstName").text(nameFirst);
		$(".enteredLastName").text(nameFirst);

		var inputQuestion1 = $("input:radio[survey1=question1].checked").val();
		var inputQuestion2 = $("input:radio[survey2=question2].checked").val();
		var inputQuestion3 = $("input:radio[survey3=question3].checked").val();
		var inputQuestion4 = $("input:radio[survey4g=question4].checked").val();
		var inputQuestion5 = $("input:radio[survey5=question5].checked").val();



		$("input[type=radio]"). click(function() {
		var total = 0;

		total += parseFloat($(this). val());
		});
		$(".totalSum"). val(total);
	});


		if(totalSum >= 2) {
			$(".yesProgramer").show();
			$(".noGo").hide();
		} else {
			$(".noGo").show();
			$(".yesProgramer").show();
		}


			event.preventDefault();
// notes for the morning - try changing input1 bak to value










<script>
// $("input[type=radio]:checked"). each(function() {
