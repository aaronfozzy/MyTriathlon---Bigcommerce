$(document).ready(function(){
  if($("body").hasClass('product')){

    // Variables //
    var altColourOne = "";
    var altColourOneLabel = "";
    var altColourOneImg = "";
    var altColourTwo = "";
    var altColourTwoLabel = "";
    var altColourTwoImg = "";
    var altColourThree = "";
    var altColourThreeLabel = "";
    var altColourThreeImg = "";
    var altColourFour = "";
    var altColourFourLabel = "";
    var altColourFourImg = "";
    var altColourFive = "";
    var altColourFiveLabel = "";
    var altColourFiveImg = "";
    var altColourSix = "";
    var altColourSixLabel = "";
    var altColourSixImg = "";
    var altColourSeven = "";
    var altColourSevenLabel = "";
    var altColourSevenImg = "";
    var altColourEight = "";
    var altColourEightLabel = "";
    var altColourEightImg = "";
    var altColourNine = "";
    var altColourNineLabel = "";
    var altColourNineImg = "";
    var altColourTen = "";
    var altColourTenLabel = "";
    var altColourTenImg = "";

    var colour = "";
    
    var btnAltColourOne = "";
    var btnAltColourTwo = "";
    var btnAltColourThree = "";
    var btnAltColourFour = "";
    var btnAltColourFive = "";
    var btnAltColourSix = "";
    var btnAltColourSeven = "";
    var btnAltColourSix = "";
    var btnAltColourSeven = "";
    var btnAltColourEight = "";
    var btnAltColourNine = "";
    var btnAltColourTen = "";
  
    var productColoursReady = 0;

    // Gather Custom Fields Values From Page //
    $("#tab-specifications dl").each(function(){
      var label = $(this).children("dt").html();
      var content = $(this).children("dd").html();
      switch(label){
        case "alt-colour-1:":
          altColourOne = content;
        break;
        case "alt-colour-1-label:":
          altColourOneLabel = content;
        break;
        case "alt-colour-1-img:":
          altColourOneImg = content;
        break;
        case "alt-colour-2:":
          altColourTwo = content;
        break;
        case "alt-colour-2-label:":
          altColourTwoLabel = content;
        break;
        case "alt-colour-2-img:":
          altColourTwoImg = content;
        break;
        case "alt-colour-3:":
          altColourThree = content;
        break;
        case "alt-colour-3-label:":
          altColourThreeLabel = content;
        break;
        case "alt-colour-3-img:":
          altColourThreeImg = content;
        break;
        case "alt-colour-4:":
          altColourFour = content;
        break;
        case "alt-colour-4-label:":
          altColourFourLabel = content;
        break;
        case "alt-colour-4-img:":
          altColourFourImg = content;
        break;
        case "alt-colour-5:":
          altColourFive = content;
        break;
        case "alt-colour-5-label:":
          altColourFiveLabel = content;
        break;
        case "alt-colour-5-img:":
          altColourFiveImg = content;
        break;
        case "alt-colour-6:":
          altColourSix = content;
        break;
        case "alt-colour-6-label:":
          altColourSixLabel = content;
        break;
        case "alt-colour-6-img:":
          altColourSixImg = content;
        break;
        case "alt-colour-7:":
          altColourSeven = content;
        break;
        case "alt-colour-7-label:":
          altColourSevenLabel = content;
        break;
        case "alt-colour-7-img:":
          altColourSevenImg = content;
        break;
        case "alt-colour-8:":
          altColourEight = content;
        break;
        case "alt-colour-8-label:":
          altColourEightLabel = content;
        break;
        case "alt-colour-8-img:":
          altColourEightImg = content;
        break;
        case "alt-colour-9:":
          altColourNine = content;
        break;
        case "alt-colour-9-label:":
          altColourNineLabel = content;
        break;
        case "alt-colour-9-img:":
          altColourNineImg = content;
        break;
        case "alt-colour-10:":
          altColourTen = content;
        break;
        case "alt-colour-10-label:":
          altColourTenLabel = content;
        break;
        case "alt-colour-10-img:":
          altColourTenImg = content;
        break;
      }
    });
    
    // Product Id Checker //
    var altColourOneType = /^\d+$/.test(altColourOne);
    var altColourTwoType = /^\d+$/.test(altColourTwo);
    var altColourThreeType = /^\d+$/.test(altColourThree);
    var altColourFourType = /^\d+$/.test(altColourFour);
    var altColourFiveType = /^\d+$/.test(altColourFive);
    var altColourSixType = /^\d+$/.test(altColourSix);
    var altColourSevenType = /^\d+$/.test(altColourSeven);
    var altColourEightType = /^\d+$/.test(altColourEight);
    var altColourNineType = /^\d+$/.test(altColourNine);
    var altColourTenType = /^\d+$/.test(altColourTen);

    // Product Price Variables

    var productPriceOne = "";
    var productPriceTwo = "";
    var productPriceThree = "";
    var productPriceFour = "";
    var productPriceFive = "";
    var productPriceSix = "";
    var productPriceSeven = "";
    var productPriceEight = "";
    var productPriceNine = "";
    var productPriceTen = "";
    
    // Inject Variables Inside Markup //
    var productAltColoursStart = '<div class="alt-colours">';

    var btnAltColourOneNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourOne+'\'"><div class="button-label">'+altColourOneLabel+'</div></div>';
    var btnAltColourTwoNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourTwo+'\'"><div class="button-label">'+altColourTwoLabel+'</div></div>';
    var btnAltColourThreeNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourThree+'\'"><div class="button-label">'+altColourThreeLabel+'</div></div>';
    var btnAltColourFourNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourFour+'\'"><div class="button-label">'+altColourFourLabel+'</div></div>';
    var btnAltColourFiveNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourFive+'\'"><div class="button-label">'+altColourFiveLabel+'</div></div>';
    var btnAltColourSixNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourSix+'\'"><div class="button-label">'+altColourSixLabel+'</div></div>';
    var btnAltColourSevenNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourSeven+'\'"><div class="button-label">'+altColourSevenLabel+'</div></div>';
    var btnAltColourEightNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourEight+'\'"><div class="button-label">'+altColourEightLabel+'</div></div>';
    var btnAltColourNineNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourNine+'\'"><div class="button-label">'+altColourNineLabel+'</div></div>';
    var btnAltColourTenNoImg = '<div class="alt-colour-holder no-img" onclick="window.location.href = \''+altColourTen+'\'"><div class="button-label">'+altColourTenLabel+'</div></div>';

    // Alt Colour One //
    if(altColourOneType === true){
      var productIdOne = altColourOne;

      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdOne,
      }, function(response) {
        var decodedProductDataOne = JSON.parse(response);
        productUrlOne = decodedProductDataOne['data']['custom_url']['url'];
        productNameOne = decodedProductDataOne['data']['name'];
        productPriceOne = '£'+decodedProductDataOne['data']['calculated_price'];
        var productCustomFieldsOne = decodedProductDataOne['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsOne.length; ++i) {
          if(productCustomFieldsOne[i]['name'] == 'Colour'){
            var productCustomFieldsColourOne = productCustomFieldsOne[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdOne,
        }, function(imageResponse) {
          var decodedProductImagesDataOne = JSON.parse(imageResponse);
          var totalReturnedImagesOne = decodedProductImagesDataOne['meta']['pagination']['total'];
          if(totalReturnedImagesOne > 0){
            productImageOne = decodedProductImagesDataOne['data'][0]['url_standard'];
            if(productImageOne.length > 1){
              console.log("Label One " + altColourOneLabel.length);
              if(altColourOneLabel.length > 1){
                btnAltColourOne = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlOne+'\'"><div class="button-thumb" style="background-image: url('+productImageOne+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageOne+');"></div><div class="button-label">'+altColourOneLabel+' - '+productPriceOne+'</div></div></div>';
              }else{
                btnAltColourOne = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlOne+'\'"><div class="button-thumb" style="background-image: url('+productImageOne+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageOne+');"></div><div class="button-label">'+productPriceOne+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourOne = '';
            productColoursReady++;
          }
        });
      });
    }else{
      btnAltColourOne = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourOne+'\'"><div class="button-thumb" style="background-image: url('+altColourOneImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourOneImg+');"></div><div class="button-label">'+altColourOneLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    // Alt Colour Two //
    if(altColourTwoType === true){
      var productIdTwo = altColourTwo;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdTwo,
      }, function(response) {
        var decodedProductDataTwo = JSON.parse(response);
        productUrlTwo = decodedProductDataTwo['data']['custom_url']['url'];
        productNameTwo = decodedProductDataTwo['data']['name'];
        productPriceTwo = '£'+decodedProductDataTwo['data']['calculated_price'];
        var productCustomFieldsTwo = decodedProductDataTwo['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsTwo.length; ++i) {
          if(productCustomFieldsTwo[i]['name'] == 'Colour'){
            var productCustomFieldsColourTwo = productCustomFieldsTwo[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdTwo,
        }, function(imageResponse) {
          var decodedProductImagesDataTwo = JSON.parse(imageResponse);
          var totalReturnedImagesTwo = decodedProductImagesDataTwo['meta']['pagination']['total'];
          if(totalReturnedImagesTwo > 0){
            productImageTwo = decodedProductImagesDataTwo['data'][0]['url_standard'];
            if(productImageTwo.length > 1){
              if(altColourTwoLabel.length > 1){
                btnAltColourTwo = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlTwo+'\'"><div class="button-thumb" style="background-image: url('+productImageTwo+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageTwo+');"></div><div class="button-label">'+altColourTwoLabel+' - '+productPriceTwo+'</div></div></div>';
              }else{
                btnAltColourTwo = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlTwo+'\'"><div class="button-thumb" style="background-image: url('+productImageTwo+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageTwo+');"></div><div class="button-label">'+productPriceTwo+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourTwo = '';
            productColoursReady++;
          }  
        });
      });
    }else{
      btnAltColourTwo = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourTwo+'\'"><div class="button-thumb" style="background-image: url('+altColourTwoImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourTwoImg+');"></div><div class="button-label">'+altColourTwoLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    // Alt Colour Three //
    if(altColourThreeType === true){
      var productIdThree = altColourThree;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdThree,
      }, function(response) {
        var decodedProductDataThree = JSON.parse(response);
        productUrlThree = decodedProductDataThree['data']['custom_url']['url'];
        productNameThree = decodedProductDataThree['data']['name'];
        productPriceThree = '£'+decodedProductDataThree['data']['calculated_price'];
        var productCustomFieldsThree = decodedProductDataThree['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsThree.length; ++i) {
          if(productCustomFieldsThree[i]['name'] == 'Colour'){
            var productCustomFieldsColourThree = productCustomFieldsThree[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdThree,
        }, function(imageResponse) {
          var decodedProductImagesDataThree = JSON.parse(imageResponse);
          var totalReturnedImagesThree = decodedProductImagesDataThree['meta']['pagination']['total'];
          if(totalReturnedImagesThree > 0){
            productImageThree = decodedProductImagesDataThree['data'][0]['url_standard'];
            if(productImageThree.length > 1){
              if(altColourThreeLabel.length > 1){
                btnAltColourThree = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlThree+'\'"><div class="button-thumb" style="background-image: url('+productImageThree+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageThree+');"></div><div class="button-label">'+altColourThreeLabel+' - '+productPriceThree+'</div></div></div>';
              }else{
                btnAltColourThree = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlThree+'\'"><div class="button-thumb" style="background-image: url('+productImageThree+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageThree+');"></div><div class="button-label">'+productPriceThree+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourThree = '';
            productColoursReady++;
          }
        });     
      });
    }else{
      btnAltColourThree = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourThree+'\'"><div class="button-thumb" style="background-image: url('+altColourThreeImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourThreeImg+');"></div><div class="button-label">'+altColourThreeLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    // Alt Colour Four //
    if(altColourFourType === true){
      var productIdFour = altColourFour;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdFour,
      }, function(response) {
        var decodedProductDataFour = JSON.parse(response);
        productUrlFour = decodedProductDataFour['data']['custom_url']['url'];
        productNameFour = decodedProductDataFour['data']['name'];
        productPriceFour = '£'+decodedProductDataFour['data']['calculated_price'];
        var productCustomFieldsFour = decodedProductDataFour['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsFour.length; ++i) {
          if(productCustomFieldsFour[i]['name'] == 'Colour'){
            var productCustomFieldsColourFour = productCustomFieldsFour[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdFour,
        }, function(imageResponse) {
          var decodedProductImagesDataFour = JSON.parse(imageResponse);
          var totalReturnedImagesFour = decodedProductImagesDataFour['meta']['pagination']['total'];
          if(totalReturnedImagesFour > 0){
            productImageFour = decodedProductImagesDataFour['data'][0]['url_standard'];
            if(productImageFour.length > 1){
              if(altColourFourLabel.length > 1){
                btnAltColourFour = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlFour+'\'"><div class="button-thumb" style="background-image: url('+productImageFour+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageFour+');"></div><div class="button-label">'+altColourFourLabel+' - '+productPriceFour+'</div></div></div>';
              }else{
                btnAltColourFour = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlFour+'\'"><div class="button-thumb" style="background-image: url('+productImageFour+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageFour+');"></div><div class="button-label">'+productPriceFour+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourFour = '';
            productColoursReady++;
          }
        });    
      });
    }else{
      btnAltColourFour = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourFour+'\'"><div class="button-thumb" style="background-image: url('+altColourFourImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourFourImg+');"></div><div class="button-label">'+altColourFourLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    // Alt Colour Five //
    if(altColourFiveType === true){
      var productIdFive = altColourFive;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdFive,
      }, function(response) {
        var decodedProductDataFive = JSON.parse(response);
        productUrlFive = decodedProductDataFive['data']['custom_url']['url'];
        productNameFive = decodedProductDataFive['data']['name'];
        productPriceFive = '£'+decodedProductDataFive['data']['calculated_price'];
        var productCustomFieldsFive = decodedProductDataFive['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsFive.length; ++i) {
          if(productCustomFieldsFive[i]['name'] == 'Colour'){
            var productCustomFieldsColourFive = productCustomFieldsFive[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdFive,
        }, function(imageResponse) {
          var decodedProductImagesDataFive = JSON.parse(imageResponse);
          var totalReturnedImagesFive = decodedProductImagesDataFive['meta']['pagination']['total'];
          if(totalReturnedImagesFive > 0){
            productImageFive = decodedProductImagesDataFive['data'][0]['url_standard'];
            if(productImageFive.length > 1){
              if(altColourFiveLabel.length > 1){
                btnAltColourFive = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlFive+'\'"><div class="button-thumb" style="background-image: url('+productImageFive+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageFive+');"></div><div class="button-label">'+altColourFiveLabel+' - '+productPriceFive+'</div></div></div>';
              }else{
                btnAltColourFive = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlFive+'\'"><div class="button-thumb" style="background-image: url('+productImageFive+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageFive+');"></div><div class="button-label">'+productPriceFive+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourFive = '';
            productColoursReady++;
          }
        });
      });
    }else{
      btnAltColourFive = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourFive+'\'"><div class="button-thumb" style="background-image: url('+altColourFiveImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourFiveImg+');"></div><div class="button-label">'+altColourFiveLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    // Alt Colour Six //
    if(altColourSixType === true){
      var productIdSix = altColourSix;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdSix,
      }, function(response) {
        var decodedProductDataSix = JSON.parse(response);
        productUrlSix = decodedProductDataSix['data']['custom_url']['url'];
        productNameSix = decodedProductDataSix['data']['name'];
        productPriceSix = '£'+decodedProductDataSix['data']['calculated_price'];
        var productCustomFieldsSix = decodedProductDataSix['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsSix.length; ++i) {
          if(productCustomFieldsSix[i]['name'] == 'Colour'){
            var productCustomFieldsColourSix = productCustomFieldsSix[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdSix,
        }, function(imageResponse) {
          var decodedProductImagesDataSix = JSON.parse(imageResponse);
          var totalReturnedImagesSix = decodedProductImagesDataSix['meta']['pagination']['total'];
          if(totalReturnedImagesSix > 0){
            productImageSix = decodedProductImagesDataSix['data'][0]['url_standard'];
            if(productImageSix.length > 1){
              if(altColourSixLabel.length > 1){
                btnAltColourSix = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlSix+'\'"><div class="button-thumb" style="background-image: url('+productImageSix+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageSix+');"></div><div class="button-label">'+altColourSixLabel+' - '+productPriceSix+'</div></div></div>';
              }else{
                btnAltColourSix = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlSix+'\'"><div class="button-thumb" style="background-image: url('+productImageSix+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageSix+');"></div><div class="button-label">'+productPriceSix+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourSix = '';
            productColoursReady++;
          }
        });
      });
    }else{
      btnAltColourSix = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourSix+'\'"><div class="button-thumb" style="background-image: url('+altColourSixImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourSixImg+');"></div><div class="button-label">'+altColourSixLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    // Alt Colour Seven //
    if(altColourSevenType === true){
      var productIdSeven = altColourSeven;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdSeven,
      }, function(response) {
        var decodedProductDataSeven = JSON.parse(response);
        productUrlSeven = decodedProductDataSeven['data']['custom_url']['url'];
        productNameSeven = decodedProductDataSeven['data']['name'];
        productPriceSeven = '£'+decodedProductDataSeven['data']['calculated_price'];
        var productCustomFieldsSeven = decodedProductDataSeven['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsSeven.length; ++i) {
          if(productCustomFieldsSeven[i]['name'] == 'Colour'){
            var productCustomFieldsColourSeven = productCustomFieldsSeven[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdSeven,
        }, function(imageResponse) {
          var decodedProductImagesDataSeven = JSON.parse(imageResponse);
          var totalReturnedImagesSeven = decodedProductImagesDataSeven['meta']['pagination']['total'];
          if(totalReturnedImagesSeven > 0){
            productImageSeven = decodedProductImagesDataSeven['data'][0]['url_standard'];
            if(productImageSeven.length > 1){
              if(altColourSevenLabel.length > 1){
                btnAltColourSeven = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlSeven+'\'"><div class="button-thumb" style="background-image: url('+productImageSeven+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageSeven+');"></div><div class="button-label">'+altColourSevenLabel+' - '+productPriceSeven+'</div></div></div>';
              }else{
                btnAltColourSeven = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlSeven+'\'"><div class="button-thumb" style="background-image: url('+productImageSeven+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageSeven+');"></div><div class="button-label">'+productPriceSeven+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourSeven = '';
            productColoursReady++;
          }
        });
      });
    }else{
      btnAltColourSeven = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourSeven+'\'"><div class="button-thumb" style="background-image: url('+altColourSevenImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourSevenImg+');"></div><div class="button-label">'+productPriceSeven+'-'+altColourSevenLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    // Alt Colour Eight //
    if(altColourEightType === true){
      var productIdEight = altColourEight;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdEight,
      }, function(response) {
        var decodedProductDataEight = JSON.parse(response);
        productUrlEight = decodedProductDataEight['data']['custom_url']['url'];
        productNameEight = decodedProductDataEight['data']['name'];
        productPriceEight = '£'+decodedProductDataEight['data']['calculated_price'];
        var productCustomFieldsEight = decodedProductDataEight['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsEight.length; ++i) {
          if(productCustomFieldsEight[i]['name'] == 'Colour'){
            var productCustomFieldsColourEight = productCustomFieldsEight[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdEight,
        }, function(imageResponse) {
          var decodedProductImagesDataEight = JSON.parse(imageResponse);
          var totalReturnedImagesEight = decodedProductImagesDataEight['meta']['pagination']['total'];
          console.log(totalReturnedImagesEight);
          if(totalReturnedImagesEight > 0){
            productImageEight = decodedProductImagesDataEight['data'][0]['url_standard'];
            if(productImageEight.length > 1){
              if(altColourEightLabel.length > 1){
                btnAltColourEight = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlEight+'\'"><div class="button-thumb" style="background-image: url('+productImageEight+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageEight+');"></div><div class="button-label">'+altColourEightLabel+' - '+productPriceEight+'</div></div></div>';
              }else{
                btnAltColourEight = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlEight+'\'"><div class="button-thumb" style="background-image: url('+productImageEight+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageEight+');"></div><div class="button-label">'+productPriceEight+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourEight = '';
            productColoursReady++;
          }
        });
      });
    }else{
      btnAltColourEight = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourEight+'\'"><div class="button-thumb" style="background-image: url('+altColourEightImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourEightImg+');"></div><div class="button-label">'+productPriceEight+'-'+altColourEightLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    // Alt Colour Nine //
    if(altColourNineType === true){
      var productIdNine = altColourNine;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdNine,
      }, function(response) {
        var decodedProductDataNine = JSON.parse(response);
        productUrlNine = decodedProductDataNine['data']['custom_url']['url'];
        productNameNine = decodedProductDataNine['data']['name'];
        productPriceNine = '£'+decodedProductDataNine['data']['calculated_price'];
        var productCustomFieldsNine = decodedProductDataNine['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsNine.length; ++i) {
          if(productCustomFieldsNine[i]['name'] == 'Colour'){
            var productCustomFieldsColourNine = productCustomFieldsNine[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdNine,
        }, function(imageResponse) {
          var decodedProductImagesDataNine = JSON.parse(imageResponse);
          var totalReturnedImagesNine = decodedProductImagesDataNine['meta']['pagination']['total'];
          if(totalReturnedImagesNine > 0){
            productImageNine = decodedProductImagesDataNine['data'][0]['url_standard'];
            if(productImageNine.length > 1){
              if(altColourNineLabel.length > 1){
                btnAltColourNine = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlNine+'\'"><div class="button-thumb" style="background-image: url('+productImageNine+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageNine+');"></div><div class="button-label">'+altColourNineLabel+' - '+productPriceNine+'</div></div></div>';
              }else{
                btnAltColourNine = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlNine+'\'"><div class="button-thumb" style="background-image: url('+productImageNine+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageNine+');"></div><div class="button-label">'+productPriceNine+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourNine = '';
            productColoursReady++;
          }
        });
      });
    }else{
      btnAltColourNine = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourNine+'\'"><div class="button-thumb" style="background-image: url('+altColourNineImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourNineImg+');"></div><div class="button-label">'+productPriceNine+'-'+altColourNineLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    // Alt Colour Ten //
    if(altColourTenType === true){
      var productIdTen = altColourTen;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours.php", {
        'productId': productIdTen,
      }, function(response) {
        var decodedProductDataTen = JSON.parse(response);
        productUrlTen = decodedProductDataTen['data']['custom_url']['url'];
        productNameTen = decodedProductDataTen['data']['name'];
        productPriceTen = '£'+decodedProductDataTen['data']['calculated_price'];
        var productCustomFieldsTen = decodedProductDataTen['data']['custom_fields'];
        var i;
        for (i = 0; i < productCustomFieldsTen.length; ++i) {
          if(productCustomFieldsTen[i]['name'] == 'Colour'){
            var productCustomFieldsColourTen = productCustomFieldsTen[i]['value']; 
          };
        }
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/alt-colours-images.php", {
          'productId': productIdTen,
        }, function(imageResponse) {
          var decodedProductImagesDataTen = JSON.parse(imageResponse);
          var totalReturnedImagesTen = decodedProductImagesDataTen['meta']['pagination']['total'];
          if(totalReturnedImagesTen > 0){
            productImageTen = decodedProductImagesDataTen['data'][0]['url_standard'];
            if(productImageTen.length > 1){
              if(altColourTenLabel.length > 1){
                btnAltColourTen = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlTen+'\'"><div class="button-thumb" style="background-image: url('+productImageTen+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageTen+');"></div><div class="button-label">'+altColourTenLabel+' - '+productPriceTen+'</div></div></div>';
              }else{
                btnAltColourTen = '<div class="alt-colour-holder" onclick="window.location.href = \''+productUrlTen+'\'"><div class="button-thumb" style="background-image: url('+productImageTen+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+productImageTen+');"></div><div class="button-label">'+productPriceTen+'</div></div></div>';
              }
            }
            productColoursReady++;
          }else{
            btnAltColourTen = '';
            productColoursReady++;
          }
        });
      });
    }else{
      btnAltColourTen = '<div class="alt-colour-holder" onclick="window.location.href = \''+altColourTen+'\'"><div class="button-thumb" style="background-image: url('+altColourTenImg+');"></div><div class="button-hover"><div class="button-full-img" style="background-image: url('+altColourTenImg+');"></div><div class="button-label">'+productPriceTen+'-'+altColourTenLabel+'</div></div></div>';
      productColoursReady++;
    }
    
    var productAltColoursEnd = '</div>';
    
    // Timer Check & Renderer //
    var checkProcessedProducts = setInterval(function() {
      if(productColoursReady === 10){
        clearInterval(checkProcessedProducts);
        // Render Panel & Tab //
        if(altColourOne == "" && altColourTwo == "" && altColourThree == "" && altColourFour == "" && altColourFive == "" && altColourSix == "" && altColourSeven == "" && altColourEight == "" && altColourNine == "" && altColourTen == ""){
          console.log("No Alt Colours Found");
        }else{
          var coloursMarkup = "";
          // Check Which Buttons Are Active Generate Markup From Buttons //
          coloursMarkup = coloursMarkup + productAltColoursStart;
          
          if(altColourOne != ""){
            coloursMarkup = coloursMarkup + btnAltColourOne;
          }
          
          if(altColourTwo != ""){
            coloursMarkup = coloursMarkup + btnAltColourTwo;
          }
          
          if(altColourThree != ""){
            coloursMarkup = coloursMarkup + btnAltColourThree;
          }
          
          if(altColourFour != ""){
            coloursMarkup = coloursMarkup + btnAltColourFour;
          }
          
          if(altColourFive != ""){
            coloursMarkup = coloursMarkup + btnAltColourFive;
          }
          
          if(altColourSix != ""){
            coloursMarkup = coloursMarkup + btnAltColourSix;
          }
          
          if(altColourSeven != ""){
            coloursMarkup = coloursMarkup + btnAltColourSeven;
          }
          
          if(altColourEight != ""){
            coloursMarkup = coloursMarkup + btnAltColourEight;
          }
          
          if(altColourNine != ""){
            coloursMarkup = coloursMarkup + btnAltColourNine;
          }
          
          if(altColourTen != ""){
            coloursMarkup = coloursMarkup + btnAltColourTen;
          }
          
          altColoursMarkup = coloursMarkup + productAltColoursEnd;
          
          $(altColoursMarkup).insertBefore($(".productView-options"));
        }
      }
    }, 500);
    
  }
});
