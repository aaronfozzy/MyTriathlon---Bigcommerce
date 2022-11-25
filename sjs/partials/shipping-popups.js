$(document).ready(function () {
  console.log("Starting Country Popup");
  function are_cookies_enabled() {
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;
    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
      document.cookie = "testcookie";
      cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);
  }
  var isCookiesEnabled = are_cookies_enabled();

  if (isCookiesEnabled == true) {
    console.log("Cookies Are Enabled");
    // if cookies are enabled
    $.getJSON("https://api.ipdata.co?api-key=4d1f72a0f7ed45e3d2018de29036ab80cda5c2e776ea062da99d6328", function (data) {
      var country = data.country_name;
      var country_c = data.country_code;
      var eu = data.is_eu;
      var ip_address = data.ip;

      // Inject HTML Into Page //

      $("body").prepend('<div class="popup-overlay-outer"><div class="popup-outer-2"><div class="popup-country"><h2>We ship to <span class="user-country">'+country+'</span></h2><li class="popup-country-txt-1">Enjoy our great international shipping rates</li><li class="popup-country-txt-2"><span style="color: red;">Free shipping</span> when you spend over £250</li><li class="popup-country-txt-3"><a href="https://mytriathlon.co.uk/country-popup-subscribe/"><span style="color: red;">Subscribe</span> to hear about special offers and new products</a></li><img src="https://mytriathlon.co.uk/content/newsite/Country-Pop-Up.jpg"><button class="popup-country-btn"></button></div></div></div>');

      console.log("Popup Code Injected Into Page");

      if (ip_address = "") {
        // if cannot find ip
        console.log("IP Address Not Found");
        $(".popup-overlay-outer").removeClass("active");
        $(".popup-overlay").removeClass("active");
        $(".popup-outer-2").removeClass("active");
      } else {
        // if found ip
        console.log("IP Address Found");
        if (country_c != "GB") {
          // if user is not in eu
          console.log("User Not In EU");
          var cookie = Cookies.get('country-popup');
          if (cookie != "shown") {
            // if cookie does not exist
            console.log("Cookie Doesnt Exist");
            $.post("https://mmsapp.mytriathlon.co.uk/ajax/realtime-dynamics/pull-dynamic-content.php", {
              'ipAddress': ip_address,
            }, function (response) {
              if (response == "No Lead Information Found") {
                // Not in database
                console.log("Lead Not In MMS Database");
                setTimeout(function () {
                  $(".popup-overlay-outer").addClass("active");
                  $(".popup-overlay").addClass("active");
                  $(".popup-outer-2").addClass("active");
                }, 1000);
                Cookies.set('country-popup', 'shown', { expires: 7 });
                ga('send', {
                  hitType: 'event',
                  eventCategory: 'CountryPopup',
                  eventAction: 'CountryPopupShow',
                  eventLabel: 'CountryPopupShown'
                });
              } else {
                // If in database
                console.log("Lead IS In MMS Database");
                var myArr = JSON.parse(response);
                var arrOrder = myArr[9];
                var date3 = new Date("01/24/2019 10:00:00");

                if (arrOrder > date3) {
                  // if ordered after the 24th JAN
                  console.log("Lead Ordered After 24th Jan");
                  $(".popup-overlay-outer").removeClass("active");
                  $(".popup-overlay").removeClass("active");
                  $(".popup-outer-2").removeClass("active");
                  Cookies.set('country-popup', 'shown', { expires: 365 });
                } else {
                  // if not ordered after the 24th JAN
                  console.log("Lead Ordered Before 24th Jan");
                  setTimeout(function () {
                    $(".popup-overlay-outer").addClass("active");
                    $(".popup-overlay").addClass("active");
                    $(".popup-outer-2").addClass("active");
                  }, 1000);
                  Cookies.set('country-popup', 'shown', { expires: 7 });
                  ga('send', {
                    hitType: 'event',
                    eventCategory: 'CountryPopup',
                    eventAction: 'CountryPopupShow',
                    eventLabel: 'CountryPopupShown'
                  });
                }
              }
            });
          } else {
            // if cookie exists
            console.log("Cookie Already Exists");
            $.post("https://mmsapp.mytriathlon.co.uk/ajax/realtime-dynamics/pull-dynamic-content.php", {
              'ipAddress': ip_address,
            }, function (response) {
              if (response == "No Lead Information Found") {
                // Not in database
                $(".popup-overlay-outer").removeClass("active");
                $(".popup-overlay").removeClass("active");
                $(".popup-outer-2").removeClass("active");
                Cookies.set('country-popup', 'shown', { expires: 7 });
              } else {
                // If in database
                var myArr = JSON.parse(response);
                var arrOrder = myArr[9];
                var date3 = new Date("01/24/2019 10:00:00");

                if (arrOrder > date3) {
                  // if ordered after the 24th JAN
                  $(".popup-overlay-outer").removeClass("active");
                  $(".popup-overlay").removeClass("active");
                  $(".popup-outer-2").removeClass("active");
                  Cookies.set('country-popup', 'shown', { expires: 365 });
                } else {
                  // if not ordered after the 24th JAN
                  $(".popup-overlay-outer").removeClass("active");
                  $(".popup-overlay").removeClass("active");
                  $(".popup-outer-2").removeClass("active");
                  Cookies.set('country-popup', 'shown', { expires: 7 });
                }
              }
            });
          }
        } else {
          // if user is in eu
          console.log("IS In EU");
          $(".popup-overlay-outer").removeClass("active");
          $(".popup-overlay").removeClass("active");
          $(".popup-outer-2").removeClass("active");
        }
      }
    });
  } else {
    // if cookies are disabled
    console.log("Cookies Are Disabled");
    $(".popup-overlay-outer").removeClass("active");
    $(".popup-overlay").removeClass("active");
    $(".popup-outer-2").removeClass("active");
  }

});

$('.popup-country-btn').click(function () {
  $(".popup-overlay-outer").removeClass("active");
  $(".popup-overlay").removeClass("active");
  $(".popup-outer-2").removeClass("active");
  ga('send', {
    hitType: 'event',
    eventCategory: 'CountryPopup',
    eventAction: 'CountryPopupClick',
    eventLabel: 'CountryPopupContinueShopping'
  });
});

$('.popup-overlay-outer').click(function () {
  $(".popup-overlay-outer").removeClass("active");
  $(".popup-overlay").removeClass("active");
  $(".popup-outer-2").removeClass("active");
  ga('send', {
    hitType: 'event',
    eventCategory: 'CountryPopup',
    eventAction: 'CountryPopupClick',
    eventLabel: 'CountryPopupClosePopup'
  });
});