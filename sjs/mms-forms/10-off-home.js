$(document).ready(function(){
  $("#14887547051_mytriathlon-button").click(function(event) {
    event.preventDefault();
    console.log("Voucher Clicked");
    var currentList = $(this).attr("data-list");
    var email = $("#txt-tenoff-email").val();
    var name=  $("#txt-tenoff-name").val();
    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };
    if(name.length > 2 && email.length > 2){
        if(isValidEmailAddress(email)){
            $("#14887547051_mytriathlon-button").html("Sending");
            $.post("https://mmsapp.mytriathlon.co.uk/ajax/web-forms/webform-processor.php", {
                "listname": currentList, "email": email, "listname": currentList, "name": name,
            }
            , function(response) {
                if(response == "Sent"){
                    $(".form").hide();
                    $(".message").hide();
                    $(".response-message").show();
                }else{
                    $("#14887547051_mytriathlon-button").html(response);
                }
            });
        }else{
            alert("Please Enter A Valid Email Address");
        }
    }else{
        alert("Please fill out the form");
    } 
  });
});
