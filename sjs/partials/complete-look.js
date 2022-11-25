$(document).ready(function(){
  if($("body").hasClass('product')){
    // Variables //
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
    
    var ctlProductsReady = 0;
    
    // Gather Custom Fields Values From Page //
    $("#tab-specifications dl").each(function(){
      var label = $(this).children("dt").html();
      var content = $(this).children("dd").html();
      switch(label){
        case "look-matching-1:":
          lookMatchingOne = content;
        break;
        case "look-matching-1-label:":
          lookMatchingOneLabel = content;
        break;
        case "look-matching-1-img:":
          lookMatchingOneImg = content;
        break;
        case "look-matching-2:":
          lookMatchingTwo = content;
        break;
        case "look-matching-2-label:":
          lookMatchingTwoLabel = content;
        break;
        case "look-matching-2-img:":
          lookMatchingTwoImg = content;
        break;
        case "look-matching-3:":
          lookMatchingThree = content;
        break;
        case "look-matching-3-label:":
          lookMatchingThreeLabel = content;
        break;
        case "look-matching-3-img:":
          lookMatchingThreeImg = content;
        break;
        case "look-matching-4:":
          lookMatchingFour = content;
        break;
        case "look-matching-4-label:":
          lookMatchingFourLabel = content;
        break;
        case "look-matching-4-img:":
          lookMatchingFourImg = content;
        break;
        case "look-matching-5:":
          lookMatchingFive = content;
        break;
        case "look-matching-5-label:":
          lookMatchingFiveLabel = content;
        break;
        case "look-matching-5-img:":
          lookMatchingFiveImg = content;
        break;
        case "look-matching-6:":
          lookMatchingSix = content;
        break;
        case "look-matching-6-label:":
          lookMatchingSixLabel = content;
        break;
        case "look-matching-6-img:":
          lookMatchingSixImg = content;
        break;
        case "look-matching-7:":
          lookMatchingSeven = content;
        break;
        case "look-matching-7-label:":
          lookMatchingSevenLabel = content;
        break;
        case "look-matching-7-img:":
          lookMatchingSevenImg = content;
        break;
        case "look-matching-8:":
          lookMatchingEight = content;
        break;
        case "look-matching-8-label:":
          lookMatchingEightLabel = content;
        break;
        case "look-matching-8-img:":
          lookMatchingEightImg = content;
        break;
      }
    });
    
    // Check If Product Id Entered Or Not //
    var lookMatchingOneType = /^\d+$/.test(lookMatchingOne);
    var lookMatchingTwoType = /^\d+$/.test(lookMatchingTwo);
    var lookMatchingThreeType = /^\d+$/.test(lookMatchingThree);
    var lookMatchingFourType = /^\d+$/.test(lookMatchingFour);
    var lookMatchingFiveType = /^\d+$/.test(lookMatchingFive);
    var lookMatchingSixType = /^\d+$/.test(lookMatchingSix);
    var lookMatchingSevenType = /^\d+$/.test(lookMatchingSeven);
    var lookMatchingEightType = /^\d+$/.test(lookMatchingEight);
    
    // Check Which Buttons Are Active Generate Markup From Buttons //
    var completeTheLookButton = '<a class="complete-the-look-btn" href="#complete-the-look-panel">Complete The Look</a>';
    var completeTheLookStart = '<div class="complete-the-look-section">';
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
    
    // Match One //
    if(lookMatchingOneType === true){
      var productIdOne = lookMatchingOne;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look.php", {
        'productId': productIdOne,
      }, function(response) {
        var decodedProductDataOne = JSON.parse(response);
        productUrlOne = decodedProductDataOne['data']['custom_url']['url'];
        productNameOne = decodedProductDataOne['data']['name'];
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look-images.php", {
          'productId': productIdOne,
        }, function(imageResponse) {
          var decodedProductImagesDataOne = JSON.parse(imageResponse);
          var totalImagesReturnedOne = decodedProductImagesDataOne['meta']['pagination']['total'];
          if(totalImagesReturnedOne > 0){
            productImageOne = decodedProductImagesDataOne['data'][0]['url_standard'];
            if(lookMatchingOneLabel.length > 1){
              htmlLookMatchingOne = '<div class="look-matching-one look-item"><a href="'+productUrlOne+'"><div class="look-img" style="background-image: url('+productImageOne+')"></div><div class="look-label">'+lookMatchingOneLabel+'</div></a></div>';
            }else{
              htmlLookMatchingOne = '<div class="look-matching-one look-item"><a href="'+productUrlOne+'"><div class="look-img" style="background-image: url('+productImageOne+')"></div><div class="look-label">'+productNameOne+'</div></a></div>';
            }
            completeTheLookContent = completeTheLookContent + htmlLookMatchingOne;
            ctlProductsReady++;
          }else{
            ctlProductsReady++;
            htmlLookMatchingOne = '';
          }
          
        });
      });
    }else{
      if(lookMatchingOne != "" && lookMatchingOneLabel != "" && lookMatchingOneImg != ""){
        htmlLookMatchingOne = '<div class="look-matching-one look-item"><a href="'+lookMatchingOne+'"><div class="look-img" style="background-image: url('+lookMatchingOneImg+')"></div><div class="look-label">'+lookMatchingOneLabel+'</div></a></div>';
        completeTheLookContent = completeTheLookContent + htmlLookMatchingOne;
        ctlProductsReady++;
      }
    }
    
    // Match Two //
    if(lookMatchingTwoType === true){
      var productIdTwo = lookMatchingTwo;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look.php", {
        'productId': productIdTwo,
      }, function(response) {
        var decodedProductDataTwo = JSON.parse(response);
        var productUrlTwo = decodedProductDataTwo['data']['custom_url']['url'];
        var productNameTwo = decodedProductDataTwo['data']['name'];
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look-images.php", {
          'productId': productIdTwo,
        }, function(imageResponse) {
          var decodedProductImagesDataTwo = JSON.parse(imageResponse);
          var totalImagesReturnedTwo = decodedProductImagesDataTwo['meta']['pagination']['total'];
          if(totalImagesReturnedTwo > 0){
            var productImageTwo = decodedProductImagesDataTwo['data'][0]['url_standard'];
            if(lookMatchingTwoLabel.length > 1){
              htmlLookMatchingTwo = '<div class="look-matching-Two look-item"><a href="'+productUrlTwo+'"><div class="look-img" style="background-image: url('+productImageTwo+')"></div><div class="look-label">'+lookMatchingTwoLabel+'</div></a></div>';
            }else{
              htmlLookMatchingTwo = '<div class="look-matching-Two look-item"><a href="'+productUrlTwo+'"><div class="look-img" style="background-image: url('+productImageTwo+')"></div><div class="look-label">'+productNameTwo+'</div></a></div>';
            }
            completeTheLookContent = completeTheLookContent + htmlLookMatchingTwo;
            ctlProductsReady++;
          }else{
            console.log("No Images Returned From API - Complete The Look Two");
            htmlLookMatchingTwo = '';
          }
        });
      });
    }else{
      if(lookMatchingTwo != "" && lookMatchingTwoLabel != "" && lookMatchingTwoImg != ""){
        htmlLookMatchingTwo = '<div class="look-matching-two look-item"><a href="'+lookMatchingTwo+'"><div class="look-img" style="background-image: url('+lookMatchingTwoImg+')"></div><div class="look-label">'+lookMatchingTwoLabel+'</div></a></div>';
        completeTheLookContent = completeTheLookContent + htmlLookMatchingTwo;
        ctlProductsReady++;
      }
    }
    
    // Match Three //
    if(lookMatchingThreeType === true){
      var productIdThree = lookMatchingThree;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look.php", {
        'productId': productIdThree,
      }, function(response) {
        var decodedProductDataThree = JSON.parse(response);
        var productUrlThree = decodedProductDataThree['data']['custom_url']['url'];
        var productNameThree = decodedProductDataThree['data']['name'];
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look-images.php", {
          'productId': productIdThree,
        }, function(imageResponse) {
          var decodedProductImagesDataThree = JSON.parse(imageResponse);
          var totalImagesReturnedThree = decodedProductImagesDataThree['meta']['pagination']['total'];
          if(totalImagesReturnedThree > 0){
            var productImageThree = decodedProductImagesDataThree['data'][0]['url_standard'];
            if(lookMatchingThreeLabel.length > 1){
              htmlLookMatchingThree = '<div class="look-matching-Three look-item"><a href="'+productUrlThree+'"><div class="look-img" style="background-image: url('+productImageThree+')"></div><div class="look-label">'+lookMatchingThreeLabel+'</div></a></div>';
            }else{
              htmlLookMatchingThree = '<div class="look-matching-Three look-item"><a href="'+productUrlThree+'"><div class="look-img" style="background-image: url('+productImageThree+')"></div><div class="look-label">'+productNameThree+'</div></a></div>';
            }
            completeTheLookContent = completeTheLookContent + htmlLookMatchingThree;
            ctlProductsReady++;
          }else{
            ctlProductsReady++;
            htmlLookMatchingThree = '';
          }
        });
      });
    }else{
      if(lookMatchingThree != "" && lookMatchingThreeLabel != "" && lookMatchingThreeImg != ""){
        htmlLookMatchingThree = '<div class="look-matching-three look-item"><a href="'+lookMatchingThree+'"><div class="look-img" style="background-image: url('+lookMatchingThreeImg+')"></div><div class="look-label">'+lookMatchingThreeLabel+'</div></a></div>';
        completeTheLookContent = completeTheLookContent + htmlLookMatchingThree;
        ctlProductsReady++;
      }
    }
    
    // Match Four //
    if(lookMatchingFourType === true){
      var productIdFour = lookMatchingFour;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look.php", {
        'productId': productIdFour,
      }, function(response) {
        var decodedProductDataFour = JSON.parse(response);
        var productUrlFour = decodedProductDataFour['data']['custom_url']['url'];
        var productNameFour = decodedProductDataFour['data']['name'];
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look-images.php", {
          'productId': productIdFour,
        }, function(imageResponse) {
          var decodedProductImagesDataFour = JSON.parse(imageResponse);
          var totalImagesReturnedFour = decodedProductImagesDataFour['meta']['pagination']['total'];
          if(totalImagesReturnedFour > 0){
            var productImageFour = decodedProductImagesDataFour['data'][0]['url_standard'];
            if(lookMatchingFourLabel.length > 1){
              htmlLookMatchingFour = '<div class="look-matching-Four look-item"><a href="'+productUrlFour+'"><div class="look-img" style="background-image: url('+productImageFour+')"></div><div class="look-label">'+lookMatchingFourLabel+'</div></a></div>';
            }else{
              htmlLookMatchingFour = '<div class="look-matching-Four look-item"><a href="'+productUrlFour+'"><div class="look-img" style="background-image: url('+productImageFour+')"></div><div class="look-label">'+productNameFour+'</div></a></div>';
            }
            completeTheLookContent = completeTheLookContent + htmlLookMatchingFour;
            ctlProductsReady++;
          }else{
            ctlProductsReady++;
            htmlLookMatchingFour = '';
          }
        });
      });
    }else{
      if(lookMatchingFour != "" && lookMatchingFourLabel != "" && lookMatchingFourImg != ""){
        htmlLookMatchingFour = '<div class="look-matching-four look-item"><a href="'+lookMatchingFour+'"><div class="look-img" style="background-image: url('+lookMatchingFourImg+')"></div><div class="look-label">'+lookMatchingFourLabel+'</div></a></div>';
        completeTheLookContent = completeTheLookContent + htmlLookMatchingFour;
        ctlProductsReady++;
      }
    }
    
    // Match Five //
    if(lookMatchingFiveType === true){
      var productIdFive = lookMatchingFive;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look.php", {
        'productId': productIdFive,
      }, function(response) {
        var decodedProductDataFive = JSON.parse(response);
        var productUrlFive = decodedProductDataFive['data']['custom_url']['url'];
        var productNameFive = decodedProductDataFive['data']['name'];
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look-images.php", {
          'productId': productIdFive,
        }, function(imageResponse) {
          var decodedProductImagesDataFive = JSON.parse(imageResponse);
          var totalImagesReturnedFive = decodedProductImagesDataFive['meta']['pagination']['total'];
          if(totalImagesReturnedFive > 0){
            var productImageFive = decodedProductImagesDataFive['data'][0]['url_standard'];
            if(lookMatchingFiveLabel.length > 1){
              htmlLookMatchingFive = '<div class="look-matching-Five look-item"><a href="'+productUrlFive+'"><div class="look-img" style="background-image: url('+productImageFive+')"></div><div class="look-label">'+lookMatchingFiveLabel+'</div></a></div>';
            }else{
              htmlLookMatchingFive = '<div class="look-matching-Five look-item"><a href="'+productUrlFive+'"><div class="look-img" style="background-image: url('+productImageFive+')"></div><div class="look-label">'+productNameFive+'</div></a></div>';
            }
            completeTheLookContent = completeTheLookContent + htmlLookMatchingFive;
            ctlProductsReady++;
          }else{
            ctlProductsReady++;
            htmlLookMatchingFive = '';
          }
        });
      });
    }else{
      if(lookMatchingFive != "" && lookMatchingFiveLabel != "" && lookMatchingFiveImg != ""){
        htmlLookMatchingFive = '<div class="look-matching-five look-item"><a href="'+lookMatchingFive+'"><div class="look-img" style="background-image: url('+lookMatchingFiveImg+')"></div><div class="look-label">'+lookMatchingFiveLabel+'</div></a></div>';
        completeTheLookContent = completeTheLookContent + htmlLookMatchingFive;
        ctlProductsReady++;
      }
    }
    
    // Match Six //
    if(lookMatchingSixType === true){
      var productIdSix = lookMatchingSix;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look.php", {
        'productId': productIdSix,
      }, function(response) {
        var decodedProductDataSix = JSON.parse(response);
        var productUrlSix = decodedProductDataSix['data']['custom_url']['url'];
        var productNameSix = decodedProductDataSix['data']['name'];
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look-images.php", {
          'productId': productIdSix,
        }, function(imageResponse) {
          var decodedProductImagesDataSix = JSON.parse(imageResponse);
          var totalImagesReturnedSix = decodedProductImagesDataSix['meta']['pagination']['total'];
          if(totalImagesReturnedSix > 0){
            var productImageSix = decodedProductImagesDataSix['data'][0]['url_standard'];
            if(lookMatchingSixLabel.length > 1){
              htmlLookMatchingSix = '<div class="look-matching-Six look-item"><a href="'+productUrlSix+'"><div class="look-img" style="background-image: url('+productImageSix+')"></div><div class="look-label">'+lookMatchingSixLabel+'</div></a></div>';
            }else{
              htmlLookMatchingSix = '<div class="look-matching-Six look-item"><a href="'+productUrlSix+'"><div class="look-img" style="background-image: url('+productImageSix+')"></div><div class="look-label">'+productNameSix+'</div></a></div>';
            }
            completeTheLookContent = completeTheLookContent + htmlLookMatchingSix;
            ctlProductsReady++;
          }else{
            ctlProductsReady++;
            htmlLookMatchingSix = '';
          }
        });
      });
    }else{
      if(lookMatchingSix != "" && lookMatchingSixLabel != "" && lookMatchingSixImg != ""){
        htmlLookMatchingSix = '<div class="look-matching-six look-item"><a href="'+lookMatchingSix+'"><div class="look-img" style="background-image: url('+lookMatchingSixImg+')"></div><div class="look-label">'+lookMatchingSixLabel+'</div></a></div>';
        completeTheLookContent = completeTheLookContent + htmlLookMatchingSix;
        ctlProductsReady++;
      }
    }
    
    // Match Seven //
    if(lookMatchingSevenType === true){
      var productIdSeven = lookMatchingSeven;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look.php", {
        'productId': productIdSeven,
      }, function(response) {
        var decodedProductDataSeven = JSON.parse(response);
        var productUrlSeven = decodedProductDataSeven['data']['custom_url']['url'];
        var productNameSeven = decodedProductDataSeven['data']['name'];
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look-images.php", {
          'productId': productIdSeven,
        }, function(imageResponse) {
          var decodedProductImagesDataSeven = JSON.parse(imageResponse);
          var totalImagesReturnedSeven = decodedProductImagesDataSeven['meta']['pagination']['total'];
          if(totalImagesReturnedSeven > 0){
            var productImageSeven = decodedProductImagesDataSeven['data'][0]['url_standard'];
            if(lookMatchingSevenLabel.length > 1){
              htmlLookMatchingSeven = '<div class="look-matching-Seven look-item"><a href="'+productUrlSeven+'"><div class="look-img" style="background-image: url('+productImageSeven+')"></div><div class="look-label">'+lookMatchingSevenLabel+'</div></a></div>';
            }else{
              htmlLookMatchingSeven = '<div class="look-matching-Seven look-item"><a href="'+productUrlSeven+'"><div class="look-img" style="background-image: url('+productImageSeven+')"></div><div class="look-label">'+productNameSeven+'</div></a></div>';
            }
            completeTheLookContent = completeTheLookContent + htmlLookMatchingSeven;
            ctlProductsReady++;
          }else{
            ctlProductsReady++;
            htmlLookMatchingSeven = '';
          }
        });
      });
    }else{
      if(lookMatchingSeven != "" && lookMatchingSevenLabel != "" && lookMatchingSevenImg != ""){
        htmlLookMatchingSeven = '<div class="look-matching-seven look-item"><a href="'+lookMatchingSeven+'"><div class="look-img" style="background-image: url('+lookMatchingSevenImg+')"></div><div class="look-label">'+lookMatchingSevenLabel+'</div></a></div>';
        completeTheLookContent = completeTheLookContent + htmlLookMatchingSeven;
        ctlProductsReady++;
      }
    }
    
    // Match Eight //
    if(lookMatchingEightType === true){
      var productIdEight = lookMatchingEight;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look.php", {
        'productId': productIdEight,
      }, function(response) {
        var decodedProductDataEight = JSON.parse(response);
        var productUrlEight = decodedProductDataEight['data']['custom_url']['url'];
        var productNameEight = decodedProductDataEight['data']['name'];
        $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/complete-the-look-images.php", {
          'productId': productIdEight,
        }, function(imageResponse) {
          var decodedProductImagesDataEight = JSON.parse(imageResponse);
          var totalImagesReturnedEight = decodedProductImagesDataEight['meta']['pagination']['total'];
          if(totalImagesReturnedEight > 0){
            var productImageEight = decodedProductImagesDataEight['data'][0]['url_standard'];
            if(lookMatchingEightLabel.length > 1){
              htmlLookMatchingEight = '<div class="look-matching-Eight look-item"><a href="'+productUrlEight+'"><div class="look-img" style="background-image: url('+productImageEight+')"></div><div class="look-label">'+lookMatchingEightLabel+'</div></a></div>';
            }else{
              htmlLookMatchingEight = '<div class="look-matching-Eight look-item"><a href="'+productUrlEight+'"><div class="look-img" style="background-image: url('+productImageEight+')"></div><div class="look-label">'+productNameEight+'</div></a></div>';
            }
            completeTheLookContent = completeTheLookContent + htmlLookMatchingEight;
            ctlProductsReady++;
          }else{
            ctlProductsReady++;
            htmlLookMatchingEight = '';
          }
        });
      });
    }else{
      if(lookMatchingEight != "" && lookMatchingEightLabel != "" && lookMatchingEightImg != ""){
        htmlLookMatchingEight = '<div class="look-matching-eight look-item"><a href="'+lookMatchingEight+'"><div class="look-img" style="background-image: url('+lookMatchingEightImg+')"></div><div class="look-label">'+lookMatchingEightLabel+'</div></a></div>';
        completeTheLookContent = completeTheLookContent + htmlLookMatchingEight;
        ctlProductsReady++;
      }
    }
    
    // Timer Check & Renderer //
    var checkProcessedProducts = setInterval(function() {
      if(ctlProductsReady === 8){
        clearInterval(checkProcessedProducts);
        completeTheLookMarkup = completeTheLookStart + completeTheLookContent + completeTheLookEnd;
        var completeTheLookTab = '<li class="tab" id="complete-the-look-tab"><a class="tab-title" href="#complete-the-look-panel"><span class="icon-brand show theme-icon" data-icon=""></span><span class="show">Complete The Look</span></a></li>';
        var completeTheLookPanel = '<div class="tab-content" id="complete-the-look-panel">'+completeTheLookMarkup+'</div>';
        
        // Render Panel & Tab //
        if(lookMatchingOne == "" && lookMatchingTwo == "" && lookMatchingThree == "" && lookMatchingFour == "" && lookMatchingFive == "" && lookMatchingSix == "" && lookMatchingSeven == "" && lookMatchingEight == ""){
          console.log("No Complete The Look To Be Found");
        }else{
          $(".productView-options").prepend(completeTheLookButton);
          $(".productView-description .tabs").append(completeTheLookTab);
          $(".productView-description .tabs-contents").append(completeTheLookPanel);
          $(".complete-the-look-btn").on("click", function(event){
            $(".productView-description .tabs .tab").removeClass("is-active");
            $(".tabs-contents .tab-content").removeClass("is-active");
            $("#complete-the-look-panel").removeClass("is-active");
            $("#complete-the-look-tab").addClass("is-active");
            $("#complete-the-look-panel").addClass("is-active");
          });
        }
      }
    }, 500);

   
  }
});
