$(document).ready(function(){
  if($("body").hasClass('product')){

    // Variables --------------------------------------------------------------------//
    var typeOne = "";
    var typeOneLabel = "";
    var typeTwo = "";
    var typeTwoLabel = "";
    var typeThree = "";
    var typeThreeLabel = "";
    var typeFour = "";
    var typeFourLabel = "";
    var yearLastYears = "";
    var yearLastYearsLabel = "";
    var yearNewerVersion = "";
    var yearNewerVersionLabel = "";
    var wetsuitNewCondition = "";
    var wetsuitNewConditionLabel = "";
    var wetsuitExrentalOneVersion = "";
    var wetsuitExrentalOneVersionLabel = "";
    var wetsuitExrentalTwoVersion = "";
    var wetsuitExrentalTwoVersionLabel = "";
    var wetsuitHireWetsuit = "";
    var wetsuitHireWetsuitLabel = "";
    var genderMensVersion = "";
    var genderMensVersionLabel = "";
    var genderWomensVersion = "";
    var genderWomensVersionLabel = "";
    var genderKidsVersion = "";
    var genderKidsVersionLabel = "";
    var viewBrandLink = "";
    var viewBrandLinkLabel = "";
    var viewRangeLink = "";
    var viewRangeLinkLabel = "";
    var viewProductLink = "";
    var viewProductLinkLabel = "";
    var viewCatLink = "";
    var viewCatLinkLabel = "";
    var viewMensLink = "";
    var viewMensLinkLabel = "";
    var viewWomensLink = "";
    var viewWomensLinkLabel = "";
    var lastYears = "";
    var lastYearsLabel = "";
    var newerVersion = "";
    var newerVersionLabel = "";
    var exrentalVersion = "";
    var exrentalVersionLabel = "";
    var hireWetsuit = "";
    var hireWetsuitLabel = "";
    var mensVersion = "";
    var mensVersionLabel = "";
    var womensVersion = "";
    var womensVersionLabel = "";
    var viewProductLink = "";
    var viewProductLinkLabel = "";

    // Gather Custom Fields Values From Page --------------------------------------------------------------------//
    $("#tab-specifications dl").each(function(){
      var label = $(this).children("dt").html();
      var content = $(this).children("dd").html();
      switch(label){
        case "type-1:":
          typeOne = content;
        break;
        case "type-1-label:":
          typeOneLabel = content;
        break;
        case "type-2:":
          typeTwo = content;
        break;
        case "type-2-label:":
          typeTwoLabel = content;
        break;
        case "type-3:":
          typeThree = content;
        break;
        case "type-3-label:":
          typeThreeLabel = content;
        break;
        case "type-4:":
          typeFour = content;
        break;
        case "type-4-label:":
          typeFourLabel = content;
        break;
        case "year-last-years:":
          yearLastYears = content;
        break;
        case "year-last-years-label:":
          yearLastYearsLabel = content;
        break;
        case "year-newer-version:":
          yearNewerVersion = content;
        break;
        case "year-newer-version-label:":
          yearNewerVersionLabel = content;
        break;
        case "wetsuit-new-condition:":
          wetsuitNewCondition = content;
        break;
        case "wetsuit-new-condition-label:":
          wetsuitNewConditionLabel = content;
        break;
        case "wetsuit-exrental-1-version:":
          wetsuitExrentalOneVersion = content;
        break;
        case "wetsuit-exrental-1-version-label:":
          wetsuitExrentalOneVersionLabel = content;
        break;
        case "wetsuit-exrental-2-version:":
          wetsuitExrentalTwoVersion = content;
        break;
        case "wetsuit-exrental-2-version-label:":
          wetsuitExrentalTwoVersionLabel = content;
        break;
        case "gender-mens-version:":
          genderMensVersion = content;
        break;
        case "gender-mens-version-label:":
          genderMensVersionLabel = content;
        break;
        case "gender-womens-version:":
          genderWomensVersion = content;
        break;
        case "gender-womens-version-label:":
          genderWomensVersionLabel = content;
        break;
        case "gender-kids-version:":
          genderKidsVersion = content;
        break;
        case "gender-kids-version-label:":
          genderKidsVersionLabel = content;
        break;
        case "view-brand-link:":
          viewBrandLink = content;
        break;
        case "view-brand-link-label:":
          viewBrandLinkLabel = content;
        break;
        case "view-range-link:":
          viewRangeLink = content;
        break;
        case "view-range-link-label:":
          viewRangeLinkLabel = content;
        break;
        case "view-range-product-link:":
          viewRangeProductLink = content;
        break;
        case "view-range-product-link-label:":
          viewRangeProductLinkLabel = content;
        break;
        case "view-cat-link:":
          viewCatLink = content;
        break;
        case "view-cat-link-label:":
          viewCatLinkLabel = content;
        break;
        case "view-mens-link:":
          viewMensLink = content;
        break;
        case "view-mens-link-label:":
          viewMensLinkLabel = content;
        break;
        case "view-womens-link:":
          viewWomensLink = content;
        break;
        case "view-womens-link-label:":
          viewWomensLinkLabel = content;
        break;
        case "hire-wetsuit:":
          hireWetsuit = content;
        break;
        case "hire-wetsuit-label:":
          hireWetsuitLabel = content;
        break;
        case "womens-version-label:":
          womensVersionLabel = content;
        break;
        case "womens-version:":
          womensVersion = content;
        break;
        case "mens-version-label:":
          mensVersionLabel = content;
        break;
        case "mens-version:":
          mensVersion = content;
        break;
        case "last-years:":
          lastYears = content;
        break;
        case "last-years-label:":
          lastYearsLabel = content;
        break;
        case "newer-version:":
          newerVersion = content;
        break;
        case "newer-version-label:":
          newerVersionLabel = content;
        break;
        case "exrental-version:":
          exrentalVersion = content;
        break;
        case "exrental-version-label:":
          exrentalVersionLabel = content;
        break;
        case "view-product-link:":
          viewProductLink = content;
        break;
        case "view-product-link-label:":
          viewProductLinkLabel = content;
        break;
      }
    });
    
    // Type Variables //
    
    var typeOneType = /^\d+$/.test(typeOne);
    var typeTwoType = /^\d+$/.test(typeTwo);
    var typeThreeType = /^\d+$/.test(typeThree);
    var typeFourType = /^\d+$/.test(typeFour);
    var yearLastYearsType = /^\d+$/.test(yearLastYears);
    var yearNewerVersionType = /^\d+$/.test(yearNewerVersion);
    var wetsuitNewConditionType = /^\d+$/.test(wetsuitNewCondition);
    var wetsuitExrentalOneVersionType = /^\d+$/.test(wetsuitExrentalOneVersion);
    var wetsuitExrentalTwoVersionType = /^\d+$/.test(wetsuitExrentalTwoVersion);
    var genderMensVersionType = /^\d+$/.test(genderMensVersion);
    var genderWomensVersionType = /^\d+$/.test(genderWomensVersion);
    var genderKidsVersionType = /^\d+$/.test(genderKidsVersion);
    var viewBrandLinkType = /^\d+$/.test(viewBrandLink);
    var viewRangeLinkType = /^\d+$/.test(viewRangeLink);
    var viewCatLinkType = /^\d+$/.test(viewCatLink);
    var viewMensLinkType = /^\d+$/.test(viewMensLink);
    var viewWomensLinkType = /^\d+$/.test(viewWomensLink);
    var hireWetsuitType = /^\d+$/.test(hireWetsuit);
    var womensVersionType = /^\d+$/.test(womensVersion);
    var mensVersionType = /^\d+$/.test(mensVersion);
    var lastYearsType = /^\d+$/.test(lastYears);
    var newerVersionType = /^\d+$/.test(newerVersion);
    var exrentalVersionType = /^\d+$/.test(exrentalVersion);
    var viewProductLinkType = /^\d+$/.test(viewProductLink);
    
    
    
    
    // Above Sizing Buttons --------------------------------------------------------------------//
    var aboveSizingButtonsStart = '<div class="above-sizing-buttons">';
    
    var aboveSizingButtonsReady = 0;
    
    
    
    // Hire Wetsuit //
    var btnHireWetsuit = "";
    if(hireWetsuitType === true){
      var productId = wetsuitNewCondition;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(hireWetsuitLabel.length > 1){
          btnHireWetsuit = '<button class="button button-secondary button-wide womens-version button-progress spinner btnHireWetsuit" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+hireWetsuitLabel+'</span></button>';
        }else{
          btnHireWetsuit = '<button class="button button-secondary button-wide womens-version button-progress spinner btnHireWetsuit" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        aboveSizingButtonsReady++;
      });
    }else{
      btnHireWetsuit = '<button class="button button-secondary button-wide womens-version button-progress spinner btnHireWetsuit" onclick="window.location.href = \''+hireWetsuit+'\'"><span class="button-text">'+hireWetsuitLabel+'</span></button>';
      aboveSizingButtonsReady++;
    }
    
    // Wetsuit Condition //
    var btnWetsuitCondition = "";
    if(wetsuitNewConditionType === true){
      var productId = wetsuitNewCondition;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(wetsuitNewConditionLabel.length > 1){
          btnWetsuitCondition = '<button class="button button-secondary button-wide womens-version button-progress spinner btnWetsuitCondition" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+wetsuitNewConditionLabel+'</span></button>';
        }else{
          btnWetsuitCondition = '<button class="button button-secondary button-wide womens-version button-progress spinner btnWetsuitCondition" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        aboveSizingButtonsReady++;
      });
    }else{
      btnWetsuitCondition = '<button class="button button-secondary button-wide womens-version button-progress spinner btnWetsuitCondition" onclick="window.location.href = \''+wetsuitNewCondition+'\'"><span class="button-text">'+wetsuitNewConditionLabel+'</span></button>';
      aboveSizingButtonsReady++;
    }
    
    // Ex Rental One //
    var btnwetsuitExrentalOne = "";
    if(wetsuitExrentalOneVersionType === true){
      var productId = wetsuitExrentalOneVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(wetsuitExrentalOneVersionLabel.length > 1){
          btnwetsuitExrentalOne = '<button class="button button-secondary button-wide womens-version button-progress spinner btnwetsuitExrentalOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+wetsuitExrentalOneVersionLabel+'</span></button>';
        }else{
          btnwetsuitExrentalOne = '<button class="button button-secondary button-wide womens-version button-progress spinner btnwetsuitExrentalOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        aboveSizingButtonsReady++;
      });
    }else{
      btnWetsuitExrentalOne = '<button class="button button-secondary button-wide womens-version button-progress spinner btnwetsuitExrentalOne" onclick="window.location.href = \''+wetsuitExrentalOneVersion+'\'"><span class="button-text">'+wetsuitExrentalOneVersionLabel+'</span></button>';
      aboveSizingButtonsReady++;
    }
    
    // Ex Rental Two //
    var btnwetsuitExrentalTwo = "";
    if(wetsuitExrentalTwoVersionType === true){
      var productId = wetsuitExrentalTwoVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(wetsuitExrentalTwoVersionLabel.length > 1){
          btnwetsuitExrentalTwo = '<button class="button button-secondary button-wide womens-version button-progress spinner btnwetsuitExrentalTwo" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+wetsuitExrentalTwoVersionLabel+'</span></button>';
        }else{
          btnwetsuitExrentalTwo = '<button class="button button-secondary button-wide womens-version button-progress spinner btnwetsuitExrentalTwo" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        aboveSizingButtonsReady++;
      });
    }else{
      btnWetsuitExrentalTwo = '<button class="button button-secondary button-wide womens-version button-progress spinner btnWetsuitExrentalTwo" onclick="window.location.href = \''+wetsuitExrentalTwoVersion+'\'"><span class="button-text">'+wetsuitExrentalTwoVersionLabel+'</span></button>';
      aboveSizingButtonsReady++;
    }
    
    // Ex Rental Version //
    var btnExRentalVersion = "";
    if(exrentalVersionType === true){
      var productId = exrentalVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(exrentalVersionLabel.length > 1){
          btnExRentalVersion = '<button class="button button-secondary button-wide womens-version button-progress spinner btnExRentalVersion" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+exrentalVersionLabel+'</span></button>';
        }else{
          btnExRentalVersion = '<button class="button button-secondary button-wide womens-version button-progress spinner btnExRentalVersion" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        aboveSizingButtonsReady++;
      });
    }else{
      btnExRentalVersion = '<button class="button button-secondary button-wide womens-version button-progress spinner btnExRentalVersion" onclick="window.location.href = \''+exrentalVersion+'\'"><span class="button-text">'+exrentalVersionLabel+'</span></button>';
      aboveSizingButtonsReady++;
    }
    
    // Newer Version //
    var btnNewerVersion = "";
    if(newerVersionType === true){
      var productId = newerVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(newerVersionLabel.length > 1){
          btnNewerVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+newerVersionLabel+'</span></button>';
        }else{
          btnNewerVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        aboveSizingButtonsReady++;
      });
    }else{
      btnNewerVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+newerVersion+'\'"><span class="button-text">'+newerVersionLabel+'</span></button>';
      aboveSizingButtonsReady++;
    }
    
    // Year Last Years //
    var btnYearLastYears = "";
    if(yearLastYearsType === true){
      var productId = yearLastYears;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(yearLastYearsLabel.length > 1){
          btnYearLastYears = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+yearLastYearsLabel+'</span></button>';
        }else{
          btnYearLastYears = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        aboveSizingButtonsReady++;
      });
    }else{
      btnYearLastYears = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+yearLastYears+'\'"><span class="button-text">'+yearLastYearsLabel+'</span></button>';
      aboveSizingButtonsReady++;
    }
    
    // Year Last Years //
    var btnYearNewerVersion = "";
    if(yearNewerVersionType === true){
      var productId = yearNewerVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(yearNewerVersionLabel.length > 1){
          btnYearNewerVersion = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+yearNewerVersionLabel+'</span></button>';
        }else{
          btnYearNewerVersion = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        aboveSizingButtonsReady++;
      });
    }else{
      btnYearNewerVersion = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+yearNewerVersion+'\'"><span class="button-text">'+yearNewerVersionLabel+'</span></button>';
      aboveSizingButtonsReady++;
    }
    
    // Last Years //
    var btnLastYears = "";
    if(lastYearsType === true){
      var productId = lastYears;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(lastYearsLabel.length > 1){
          btnLastYears = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+lastYearsLabel+'</span></button>';
        }else{
          btnLastYears = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        aboveSizingButtonsReady++;
      });
    }else{
      btnLastYears = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+lastYears+'\'"><span class="button-text">'+lastYearsLabel+'</span></button>';
      aboveSizingButtonsReady++;
    }
    
    var aboveSizingButtonsEnd = '</div>';

    var aboveSizingButtonMarkup = "";

    // Render Above Sizing Buttons --------------------------------------------------------------------//
    
    // Timer Check & Renderer //
    var checkAboveProducts = setInterval(function() {
      
      if(aboveSizingButtonsReady === 9){
        clearInterval(checkAboveProducts);
        // Render Panel & Tab //
        aboveSizingButtonMarkup = aboveSizingButtonMarkup + aboveSizingButtonsStart;
        if(hireWetsuit && hireWetsuitLabel != ""){
          aboveSizingButtonMarkup = aboveSizingButtonMarkup + btnHireWetsuit;
        }
        
        if(wetsuitNewCondition && wetsuitNewConditionLabel != ""){
          aboveSizingButtonMarkup = aboveSizingButtonMarkup + btnWetsuitCondition;
        }
        
        if(wetsuitExrentalOneVersion && wetsuitExrentalOneVersionLabel != ""){
          aboveSizingButtonMarkup = aboveSizingButtonMarkup + btnWetsuitExrentalOne;
        }
        
        if(wetsuitExrentalTwoVersion && wetsuitExrentalTwoVersionLabel != ""){
          aboveSizingButtonMarkup = aboveSizingButtonMarkup + btnWetsuitExrentalTwo;
        }
        
        if(exrentalVersion && exrentalVersionLabel != ""){
          aboveSizingButtonMarkup = aboveSizingButtonMarkup + btnExRentalVersion;
        }
        
        if(newerVersion && newerVersionLabel != ""){
           aboveSizingButtonMarkup = aboveSizingButtonMarkup + btnNewerVersion;
         }
         
         if(yearLastYears && yearLastYearsLabel != ""){
            aboveSizingButtonMarkup = aboveSizingButtonMarkup + btnYearLastYears;
          }
         
          if(yearNewerVersion && yearNewerVersionLabel != ""){
            aboveSizingButtonMarkup = aboveSizingButtonMarkup + btnYearNewerVersion;
          }
          
          if(lastYears && lastYearsLabel != ""){
             aboveSizingButtonMarkup = aboveSizingButtonMarkup + btnLastYears;
           }
        
        aboveSizingButtonMarkup = aboveSizingButtonMarkup + aboveSizingButtonsEnd;
        
        $("section.productView-details:first").append(aboveSizingButtonMarkup);
      }
    }, 200);
    

    // Blow Add To Cart Buttons --------------------------------------------------------------------//
    var blowAddToCartButtonsStart = '<div class="blow-atc-buttons">';
    
    var belowSizingButtonsReady = 0;
    
    // Type One //
    var btnTypeOne = "";
    if(typeOneType === true){
      var productId = typeOne;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(typeOneLabel.length > 1){
          btnTypeOne = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+typeOneLabel+'</span></button>';
        }else{
          btnTypeOne = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        belowSizingButtonsReady++;
      });
    }else{
      btnTypeOne = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+typeOne+'\'"><span class="button-text">'+typeOneLabel+'</span></button>';
      belowSizingButtonsReady++;
    }
    
    // Type Two //
    var btnTypeTwo = "";
    if(typeTwoType === true){
      var productId = typeTwo;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(typeTwoLabel.length > 1){
          btnTypeTwo = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeTwo" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+typeTwoLabel+'</span></button>';
        }else{
          btnTypeTwo = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeTwo" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        belowSizingButtonsReady++;
      });
    }else{
      btnTypeTwo = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeTwo" onclick="window.location.href = \''+typeTwo+'\'"><span class="button-text">'+typeTwoLabel+'</span></button>';
      belowSizingButtonsReady++;
    }
    
    // Type Three //
    var btnTypeThree = "";
    if(typeThreeType === true){
      var productId = typeThree;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(typeThreeLabel.length > 1){
          btnTypeThree = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeThree" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+typeThreeLabel+'</span></button>';
        }else{
          btnTypeThree = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeThree" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        belowSizingButtonsReady++;
      });
    }else{
      btnTypeThree = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeThree" onclick="window.location.href = \''+typeThree+'\'"><span class="button-text">'+typeThreeLabel+'</span></button>';
      belowSizingButtonsReady++;
    }
    
    // Type Four //
    var btnTypeFour = "";
    if(typeFourType === true){
      var productId = typeFour;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(typeFourLabel.length > 1){
          btnTypeFour = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeFour" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+typeFourLabel+'</span></button>';
        }else{
          btnTypeFour = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeFour" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        belowSizingButtonsReady++;
      });
    }else{
      btnTypeFour = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeFour" onclick="window.location.href = \''+typeFour+'\'"><span class="button-text">'+typeFourLabel+'</span></button>';
      belowSizingButtonsReady++;
    }
    
    
    
    // Gender Mens Version //
    var btnGenderMensVersion = "";
    if(genderMensVersionType === true){
      var productId = genderMensVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(genderMensVersionLabel.length > 1){
          btnGenderMensVersion = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+genderMensVersionLabel+'</span></button>';
        }else{
          btnGenderMensVersion = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        belowSizingButtonsReady++;
      });
    }else{
      btnGenderMensVersion = '<button class="button button-secondary button-wide womens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+genderMensVersion+'\'"><span class="button-text">'+genderMensVersionLabel+'</span></button>';
      belowSizingButtonsReady++;
    }
    
    // Gender Womens Version //
    var btnGenderWomensVersion = "";
    if(genderWomensVersionType === true){
      var productId = genderWomensVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(genderWomensVersionLabel.length > 1){
          btnGenderWomensVersion = '<button class="button button-secondary button-wide button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+genderWomensVersionLabel+'</span></button>';
        }else{
          btnGenderWomensVersion = '<button class="button button-secondary button-wide button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        belowSizingButtonsReady++;
      });
    }else{
      btnGenderWomensVersion = '<button class="button button-secondary button-wide woWomens-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+genderWomensVersion+'\'"><span class="button-text">'+genderWomensVersionLabel+'</span></button>';
      belowSizingButtonsReady++;
    }
    
    // Gender Kids Version //
    var btnGenderKidsVersion = "";
    if(genderKidsVersionType === true){
      var productId = genderKidsVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(genderKidsVersionLabel.length > 1){
          btnGenderKidsVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+genderKidsVersionLabel+'</span></button>';
        }else{
          btnGenderKidsVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        belowSizingButtonsReady++;
      });
    }else{
      btnGenderKidsVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+genderKidsVersion+'\'"><span class="button-text">'+genderKidsVersionLabel+'</span></button>';
      belowSizingButtonsReady++;
    }
    
    // Womens Version //
    var btnwomensVersion = "";
    if(womensVersionType === true){
      var productId = womensVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(womensVersionLabel.length > 1){
          btnWomensVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+womensVersionLabel+'</span></button>';
        }else{
          btnWomensVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        belowSizingButtonsReady++;
      });
    }else{
      btnWomensVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+womensVersion+'\'"><span class="button-text">'+womensVersionLabel+'</span></button>';
      belowSizingButtonsReady++;
    }
    
    // Mens Version //
    var btnMensVersion = "";
    if(mensVersionType === true){
      var productId = mensVersion;
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/website-functions/type-buttons.php", {
        'productId': productId,
      }, function(response) {
        var decodedProductData = JSON.parse(response);
        productUrl = decodedProductData['data']['custom_url']['url'];
        productName = decodedProductData['data']['name'];
        if(mensVersionLabel.length > 1){
          btnMensVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+mensVersionLabel+'</span></button>';
        }else{
          btnMensVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+productUrl+'\'"><span class="button-text">'+productName+'</span></button>';
        }
        belowSizingButtonsReady++;
      });
    }else{
      btnMensVersion = '<button class="button button-secondary button-wide woKids-version button-progress spinner btnTypeOne" onclick="window.location.href = \''+mensVersion+'\'"><span class="button-text">'+mensVersionLabel+'</span></button>';
      belowSizingButtonsReady++;
    }
    
    

    var blowAddToCartButtonsEnd = '</div>';

    var blowAtcButtonMarkup = "";
    
    // Render Blow Add To Cart Buttons --------------------------------------------------------------------//
    // Timer Check & Renderer //
    var checkBelowProducts = setInterval(function() {
      
      if(belowSizingButtonsReady === 9){
        clearInterval(checkBelowProducts);
        // Render Panel & Tab //
        blowAtcButtonMarkup = blowAtcButtonMarkup + blowAddToCartButtonsStart;
        
        if(typeOne && typeOneLabel != ""){
           blowAtcButtonMarkup = blowAtcButtonMarkup + btnTypeOne;
         }
        
         if(typeTwo && typeTwoLabel != ""){
           blowAtcButtonMarkup = blowAtcButtonMarkup + btnTypeTwo;
         }
        
         if(typeThree && typeThreeLabel != ""){
           blowAtcButtonMarkup = blowAtcButtonMarkup + btnTypeThree;
         }
        
         if(typeFour && typeFourLabel != ""){
           blowAtcButtonMarkup = blowAtcButtonMarkup + btnTypeFour;
         }
        
         if(genderMensVersion && genderMensVersionLabel != ""){
           blowAtcButtonMarkup = blowAtcButtonMarkup + btnGenderMensVersion;
         }
        
         if(genderWomensVersion && genderWomensVersionLabel != ""){
           blowAtcButtonMarkup = blowAtcButtonMarkup + btnGenderWomensVersion;
         }
        
         if(genderKidsVersion && genderKidsVersionLabel != ""){
           blowAtcButtonMarkup = blowAtcButtonMarkup + btnGenderKidsVersion;
         }
        
         if(womensVersion && womensVersionLabel != ""){
           blowAtcButtonMarkup = blowAtcButtonMarkup + btnWomensVersion;
         }
        
         if(mensVersion && mensVersionLabel != ""){
           blowAtcButtonMarkup = blowAtcButtonMarkup + btnMensVersion;
         }
        
         blowAtcButtonMarkup = blowAtcButtonMarkup + blowAddToCartButtonsEnd;
        
         $(blowAtcButtonMarkup).insertAfter($(".productView-options"));
      
      }
    }, 200);
    
    // Blow Usp Buttons --------------------------------------------------------------------//
    var blowUspButtonsStart = '<div class="blow-usp-buttons">';

    var btnViewBrandLink = '<button class="button button-secondary button-wide womens-version button-progress spinner" onclick="window.location.href = \''+viewBrandLink+'\'"><span class="button-text">'+viewBrandLinkLabel+'</span></button>';
    var btnViewRangeLink = '<button class="button button-secondary button-wide womens-version button-progress spinner" onclick="window.location.href = \''+viewRangeLink+'\'"><span class="button-text">'+viewRangeLinkLabel+'</span></button>';
    var btnViewCatLink = '<button class="button button-secondary button-wide womens-version button-progress spinner" onclick="window.location.href = \''+viewCatLink+'\'"><span class="button-text">'+viewCatLinkLabel+'</span></button>';
    var btnViewMensLink = '<button class="button button-secondary button-wide womens-version button-progress spinner" onclick="window.location.href = \''+viewMensLink+'\'"><span class="button-text">'+viewMensLinkLabel+'</span></button>';
    var btnViewWomensLink = '<button class="button button-secondary button-wide womens-version button-progress spinner" onclick="window.location.href = \''+viewWomensLink+'\'"><span class="button-text">'+viewWomensLinkLabel+'</span></button>';
    var btnViewProductLink = '<button class="button button-secondary button-wide womens-version button-progress spinner" onclick="window.location.href = \''+viewProductLink+'\'"><span class="button-text">'+viewProductLinkLabel+'</span></button>';

    var blowUspButtonsEnd = '</div>';

    var blowUspButtonMarkup = "";

    // Render Blow Usp Buttons --------------------------------------------------------------------//
    blowUspButtonMarkup = blowUspButtonMarkup + blowUspButtonsStart;

    if(viewBrandLink && viewBrandLinkLabel != ""){
      blowUspButtonMarkup = blowUspButtonMarkup + btnViewBrandLink;
    }

    if(viewRangeLink && viewRangeLinkLabel != ""){
      blowUspButtonMarkup = blowUspButtonMarkup + btnViewRangeLink;
    }

    if(viewCatLink && viewCatLinkLabel != ""){
      blowUspButtonMarkup = blowUspButtonMarkup + btnViewCatLink;
    }

    if(viewMensLink && viewMensLinkLabel != ""){
      blowUspButtonMarkup = blowUspButtonMarkup + btnViewMensLink;
    }

    if(viewWomensLink && viewWomensLinkLabel != ""){
      blowUspButtonMarkup = blowUspButtonMarkup + btnViewWomensLink;
    }
    
    if(viewProductLink && viewProductLinkLabel != ""){
      blowUspButtonMarkup = blowUspButtonMarkup + btnViewProductLink;
    }

    blowUspButtonMarkup = blowUspButtonMarkup + blowUspButtonsEnd;

    $(blowUspButtonMarkup).insertAfter($(".product-usp"));



  }
});
