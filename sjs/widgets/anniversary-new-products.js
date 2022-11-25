$(document).ready(function(){
	if($(".anniversary-new-products").length){
		var detectedCustomerId = 52278;
		
		// Get Orders Last Year //
		$.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/orders-year-ago-anniversary-new.php", {
			'detectedCustomerId': detectedCustomerId,
		}, function(response) {
			console.log(response);
		});
		
	}else{
		console.log("Anniversary New Products Not Present");
	}
}); 