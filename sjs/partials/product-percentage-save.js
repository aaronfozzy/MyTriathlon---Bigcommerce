$(document).ready(function(){
	if($("body").hasClass('product')){
		setInterval(function(){  
			var productPrice = $(".price--withTax").html();
			var thousandsFilterPrice = productPrice.replace(",", "");
			var splitProductPrice = parseFloat(thousandsFilterPrice.split("£")[1]);
			if($(".price--rrp").length){
				var productRRP = $(".price--rrp").html();
				var thousandsFilterRRP = productRRP.replace(",", "");
				var splitProductRRP = parseFloat(thousandsFilterRRP.split("£")[1]);
				var percentagePrice = splitProductPrice / splitProductRRP * 100 - 100;
				var finalPercentagePrice = percentagePrice - percentagePrice - percentagePrice;
				$(".saved-price").html("You save: " + parseInt(finalPercentagePrice) + "%");
			}
		}, 1000);
	}
});