$(document).ready(function(){
  if($("body").hasClass('cart')){
    var currentUrl = "";
    currentUrl = document.location.origin;
    console.log(currentUrl);
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://"+currentUrl+"/api/storefront/carts",
      "method": "GET",
      "headers": {}
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
});
