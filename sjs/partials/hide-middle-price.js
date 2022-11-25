$(document).ready(function(){
	if($("body").hasClass('product')){
		var rrpPrice = $(".price--rrp").html();
		var priceNonSale = $(".price--non-sale").html();
		setInterval(function(){  
			if(priceNonSale.trim().length > 1){
				var splitRRP = parseFloat(rrpPrice.split("£")[1]);
				var splitPriceNonSale = parseFloat(priceNonSale.split("£")[1]);
				if(splitRRP < splitPriceNonSale){
					$(".non-sale-price--withTax").show();
					$(".rrp-price--withTax").hide();
				}else if(splitRRP == splitPriceNonSale){
					$(".rrp-price--withTax").hide();
					$(".non-sale-price--withTax").show();
				}else if(splitRRP > splitPriceNonSale){
					$(".rrp-price--withTax").show();
					$(".non-sale-price--withTax").hide();
				}else{
					$(".rrp-price--withTax").show();
					$(".non-sale-price--withTax").hide();
				}
			}else{
				$(".non-sale-price--withTax").hide();
				$(".rrp-price--withTax").show();
			}
		}, 1000);
	}
});