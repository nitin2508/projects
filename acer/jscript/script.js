$().ready(function(){
	$("#submit-button").click(function(event){
		var phoneno1 = $("#phone-no-1").val();
		var phoneno2 = $("#phone-no-2").val();
		console.log("phoneno1",phoneno1);
		console.log("phoneno2",phoneno2);
		if(phoneno1!==phoneno2){
			$("#phone-match-alert").show();
			return false;
		} else {
			$("#phone-match-alert").hide();
		}
	});
});