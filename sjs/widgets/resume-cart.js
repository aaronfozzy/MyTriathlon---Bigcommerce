$(document).ready(function(){
	if($(".resume-cart-widget").length){
		var currentUrl = document.location.origin;
		
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": currentUrl + "/api/storefront/carts",
			"method": "GET",
			"headers": {}
		}
		
		$.ajax(settings).done(function (response) {
			var cartData = response[0];
			var cartTotalAmount = parseFloat(cartData['cartAmount']).toFixed(2);
			var customerId = cartData['customerId'];
			var createdTime = cartData['createdTime'];
			var updatedTime = cartData['updatedTime'];
			var noOfProducts = cartData['lineItems']['physicalItems']['length'];
			
			console.log(noOfProducts);
			
			$(".resume-cart-widget .description").html("You have " + noOfProducts + " products in your cart with a total of £" + cartTotalAmount);
			
			if(noOfProducts >= 1){
				$(".resume-cart-widget").show();
			}
		});
		
	}else{
		console.log("Resume Cart Widget Not Present");
	}
});