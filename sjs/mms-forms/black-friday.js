$(document).ready(function () {
  var ipAddressArray = [];
  $.get(
    "https://ipinfo.io",
    function (response) {
      ipAddressArray.push(response.ip);
      $("#16672936011_").val(ipAddressArray);
    },
    "jsonp"
  );
});
$("#16672936011_-button").click(function (event) {
  event.preventDefault();
  $("#16672936011_-button").html("Sending");
  var currentList = $(this).attr("data-list");
  var email = $("#email-black-friday").val();
  var fname = $("#fname-black-friday").val();
  var ipaddress = $("#16672936011_").val();
  if (email.length) {
    $(".black-friday-form").hide();
  }
  $.post(
    "https://mmsapp.mytriathlon.co.uk/ajax/web-forms/webform-processor.php",
    {
      listname: currentList,
      email: email,
      listname: currentList,
      fname: fname,
    },
    function (response) {
      Cookies.set("black_friday", "signedup");
      $(".black-friday-overlay").hide();
      $("#16672936011_-button").html("Thank you for Registering");
    }
  );
});
