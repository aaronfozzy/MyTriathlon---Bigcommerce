$(document).ready(function(){
      var ipAddressArray = [];
      $.get("https://ipinfo.io", function(response) {
        ipAddressArray.push(response.ip);
        $("#16493350451_mytriathlon").val(ipAddressArray);
      }, "jsonp");
    });
    $("#16493350451_mytriathlon-button").click(function(event){
        event.preventDefault();
        $("#16493350451_mytriathlon-button").html("Sending");
        var currentList = $(this).attr("data-list");
        var email = $("#email_1").val();
        var fname = $("#fname").val();
        var ipaddress = $("#16493350451_mytriathlon").val();
        if(email.length){$(".easter-form").hide();}
      $.post("https://mmsapp.mytriathlon.co.uk/ajax/web-forms/webform-processor.php", {
        "listname": currentList, "email": email, "fname": fname,
      }, function(response) {
        Cookies.set('easter_2022', 'signedupeaster');
        $(".easter-overlay").hide();
        $("#16493350451_mytriathlon-button").html("Thank you for Registering");
      });
    });