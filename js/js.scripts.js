
$(document).ready(function(){
	$("form#survey").submit(function(event) {
		var nameFirst = $("input#inputFirstName").val();
		var nameLast = $("input#inputName").val();


		$(".enteredFirstName").text(nameFirst);
		$(".enteredLastName").text(nameFirst);


		$("input[type=radio]"). click(function() {
		var total = 0;
		$("input[type=radio]:checked"). each(function() {
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
