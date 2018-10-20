
$(document).ready(function(event){
	$("form#survey").submit(function() {
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
