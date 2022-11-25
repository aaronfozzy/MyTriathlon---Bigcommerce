$(document).ready(function(){
  if($("body").hasClass('cart')){
    var currentUrl = document.location.origin;
    
    var lookMatchingOne = "";
    var lookMatchingOneLabel = "";
    var lookMatchingOneImg = "";
    var lookMatchingTwo = "";
    var lookMatchingTwoLabel = "";
    var lookMatchingTwoImg = "";
    var lookMatchingThree = "";
    var lookMatchingThreeLabel = "";
    var lookMatchingThreeImg = "";
    var lookMatchingFour = "";
    var lookMatchingFourLabel = "";
    var lookMatchingFourImg = "";
    var lookMatchingFive = "";
    var lookMatchingFiveLabel = "";
    var lookMatchingFiveImg = "";
    var lookMatchingSix = "";
    var lookMatchingSixLabel = "";
    var lookMatchingSixImg = "";
    var lookMatchingSeven = "";
    var lookMatchingSevenLabel = "";
    var lookMatchingSevenImg = "";
    var lookMatchingEight = "";
    var lookMatchingEightLabel = "";
    var lookMatchingEightImg = "";
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": currentUrl + "/api/storefront/carts",
      "method": "GET",
      "headers": {}
    }

    $.ajax(settings).done(function (response) {
      var cartData = response[0]['lineItems']['physicalItems'];
      for (var i = 0, l = cartData.length; i < l; i++) {
        var productId = cartData[i]['productId'];
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look.php", {
          'productId': productId,
        }, function(response) {
          if(response == "Not Permitted" || response == "Please check the request no product id found" || response == "Curl Error"){
            console.log(response);
          }else{
            var decodedProductData = JSON.parse(response);
            var customFieldsData = decodedProductData['data']['custom_fields'];
            for (var i = 0, l = customFieldsData.length; i < l; i++) {
              var customFieldName = customFieldsData[i]['name'];
              var customFieldValue = customFieldsData[i]['value'];  
              switch(customFieldName){
                case "look-matching-1":
                  lookMatchingOne = customFieldValue;
                break;
                case "look-matching-1-label":
                  lookMatchingOneLabel = customFieldValue;
                break;
                case "look-matching-1-img":
                  lookMatchingOneImg = customFieldValue;
                break;
                case "look-matching-2":
                  lookMatchingTwo = customFieldValue;
                break;
                case "look-matching-2-label":
                  lookMatchingTwoLabel = customFieldValue;
                break;
                case "look-matching-2-img":
                  lookMatchingTwoImg = customFieldValue;
                break;
                case "look-matching-3":
                  lookMatchingThree = customFieldValue;
                break;
                case "look-matching-3-label":
                  lookMatchingThreeLabel = customFieldValue;
                break;
                case "look-matching-3-img":
                  lookMatchingThreeImg = customFieldValue;
                break;
                case "look-matching-4":
                  lookMatchingFour = customFieldValue;
                break;
                case "look-matching-4-label":
                  lookMatchingFourLabel = customFieldValue;
                break;
                case "look-matching-4-img":
                  lookMatchingFourImg = customFieldValue;
                break;
                case "look-matching-5":
                  lookMatchingFive = customFieldValue;
                break;
                case "look-matching-5-label":
                  lookMatchingFiveLabel = customFieldValue;
                break;
                case "look-matching-5-img":
                  lookMatchingFiveImg = customFieldValue;
                break;
                case "look-matching-6":
                  lookMatchingSix = customFieldValue;
                break;
                case "look-matching-6-label":
                  lookMatchingSixLabel = customFieldValue;
                break;
                case "look-matching-6-img":
                  lookMatchingSixImg = customFieldValue;
                break;
                case "look-matching-7":
                  lookMatchingSeven = customFieldValue;
                break;
                case "look-matching-7-label":
                  lookMatchingSevenLabel = customFieldValue;
                break;
                case "look-matching-7-img":
                  lookMatchingSevenImg = customFieldValue;
                break;
                case "look-matching-8":
                  lookMatchingEight = customFieldValue;
                break;
                case "look-matching-8-label":
                  lookMatchingEightLabel = customFieldValue;
                break;
                case "look-matching-8-img":
                  lookMatchingEightImg = customFieldValue;
                break;
              }
            }
            // Check Which Buttons Are Active Generate Markup From Buttons //
            var completeTheLookStart = '<div class="complete-the-look-section">';
            var completeTheLookHeader = '<h3>Complete The Look</h3>';
            var completeTheLookContent = "";
            var completeTheLookEnd = "</div>";
            var completeTheLookMarkup = "";
            
            var htmlLookMatchingOne = "";
            var htmlLookMatchingTwo = "";
            var htmlLookMatchingThree = "";
            var htmlLookMatchingFour = "";
            var htmlLookMatchingFive = "";
            var htmlLookMatchingSix = "";
            var htmlLookMatchingSeven = "";
            var htmlLookMatchingEight = "";
            
            if(lookMatchingOne != "" && lookMatchingOneLabel != "" && lookMatchingOneImg != ""){
              htmlLookMatchingOne = '<div class="look-matching-one look-item"><a href="'+lookMatchingOne+'"><div class="look-img" style="background-image: url('+lookMatchingOneImg+')"></div><div class="look-label">'+lookMatchingOneLabel+'</div></a></div>';
              completeTheLookContent = completeTheLookContent + htmlLookMatchingOne;
            }
            
            if(lookMatchingTwo != "" && lookMatchingTwoLabel != "" && lookMatchingTwoImg != ""){
              htmlLookMatchingTwo = '<div class="look-matching-two look-item"><a href="'+lookMatchingTwo+'"><div class="look-img" style="background-image: url('+lookMatchingTwoImg+')"></div><div class="look-label">'+lookMatchingTwoLabel+'</div></a></div>';
              completeTheLookContent = completeTheLookContent + htmlLookMatchingTwo;
            }
            
            if(lookMatchingThree != "" && lookMatchingThreeLabel != "" && lookMatchingThreeImg != ""){
              htmlLookMatchingThree = '<div class="look-matching-three look-item"><a href="'+lookMatchingThree+'"><div class="look-img" style="background-image: url('+lookMatchingThreeImg+')"></div><div class="look-label">'+lookMatchingThreeLabel+'</div></a></div>';
              completeTheLookContent = completeTheLookContent + htmlLookMatchingThree;
            }
            
            if(lookMatchingFour != "" && lookMatchingFourLabel != "" && lookMatchingFourImg != ""){
              htmlLookMatchingFour = '<div class="look-matching-four look-item"><a href="'+lookMatchingFour+'"><div class="look-img" style="background-image: url('+lookMatchingFourImg+')"></div><div class="look-label">'+lookMatchingFourLabel+'</div></a></div>';
              completeTheLookContent = completeTheLookContent + htmlLookMatchingFour;
            }
            
            if(lookMatchingFive != "" && lookMatchingFiveLabel != "" && lookMatchingFiveImg != ""){
              htmlLookMatchingFive = '<div class="look-matching-five look-item"><a href="'+lookMatchingFive+'"><div class="look-img" style="background-image: url('+lookMatchingFiveImg+')"></div><div class="look-label">'+lookMatchingFiveLabel+'</div></a></div>';
              completeTheLookContent = completeTheLookContent + htmlLookMatchingFive;
            }
            
            if(lookMatchingSix != "" && lookMatchingSixLabel != "" && lookMatchingSixImg != ""){
              htmlLookMatchingSix = '<div class="look-matching-six look-item"><a href="'+lookMatchingSix+'"><div class="look-img" style="background-image: url('+lookMatchingSixImg+')"></div><div class="look-label">'+lookMatchingSixLabel+'</div></a></div>';
              completeTheLookContent = completeTheLookContent + htmlLookMatchingSix;
            }
            
            if(lookMatchingSeven != "" && lookMatchingSevenLabel != "" && lookMatchingSevenImg != ""){
              htmlLookMatchingSeven = '<div class="look-matching-seven look-item"><a href="'+lookMatchingSeven+'"><div class="look-img" style="background-image: url('+lookMatchingSevenImg+')"></div><div class="look-label">'+lookMatchingSevenLabel+'</div></a></div>';
              completeTheLookContent = completeTheLookContent + htmlLookMatchingSeven;
            }
            
            if(lookMatchingEight != "" && lookMatchingEightLabel != "" && lookMatchingEightImg != ""){
              htmlLookMatchingEight = '<div class="look-matching-eight look-item"><a href="'+lookMatchingEight+'"><div class="look-img" style="background-image: url('+lookMatchingEightImg+')"></div><div class="look-label">'+lookMatchingEightLabel+'</div></a></div>';
              completeTheLookContent = completeTheLookContent + htmlLookMatchingEight;
            }
            
            completeTheLookMarkup = completeTheLookStart + completeTheLookHeader + completeTheLookContent + completeTheLookEnd;
            
            $("div[data-cart-totals]").prepend(completeTheLookMarkup);
          }
        });  
      }
    });
  }
});
