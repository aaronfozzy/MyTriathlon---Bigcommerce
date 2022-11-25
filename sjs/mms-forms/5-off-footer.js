
$(document).ready(function(){
  console.log("Hello Starting to Remove Form");
  // Clear Current Form Footer //
  $(".footer-content-middle .theme-newsletter").html('');

  // Inject New Form Into Footer //
  $(".footer-content-middle .theme-newsletter").html('<h5>Sign up to our newsletter for £5 off when you spend £50</h5><form class="form" method="post"><fieldset class="form-fieldset"></fieldset><div class="form-field"><label class="form-label is-srOnly" for="email">Email Address</label><div class="form-prefixPostfix wrap"><input class="form-input" id="email" name="email" type="email" value="" placeholder="name@email.com"><button id="14882908711_mytriathlon-button" class="mms-button" data-list="14882908711_mytriathlon"><span class="icon-newsletter theme-icon" data-icon=""></span></button></div></fieldset></form></div><div class="coupon-previewer">Thank You - Your Code Is: UZ1K79B9IDJ8</div>');

  // Send Form Data To MMS //
  $("#14882908711_mytriathlon-button").click(function(event){
    event.preventDefault();
    var currentList = $(this).attr("data-list");
    var email = $("#email").val();
    var ipaddress = $("#14882908711_mytriathlon").val();
    $.post("https://mmsapp.mytriathlon.co.uk/ajax/web-forms/webform-processor.php", {
      "listname": currentList, 
      "email": email,
      "type": "lead",
    }, function(response) {
        $(".theme-newsletter .coupon-previewer").show();
    });
  });
});