// Easter JS Requires Moment and Cookies
$(document).ready(function(){
  var cookie = Cookies.get('easter_2022');
  if(cookie == "signedupeaster"){
    $(".easter-form").addClass("inactive");
    $(".easter-overlay").addClass("inactive");
  }

  var date = new Date();
  var day = date.getDate();
  switch(day){
      case 13:
          $(".easter-offers ul li[data-id='1']").children('.egg').addClass('active');
      break;
      case 14:
          $(".easter-offers ul li[data-id='1']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='2']").children('.egg').addClass('active');
      break;
      case 15:
          $(".easter-offers ul li[data-id='1']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='2']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='3']").children('.egg').addClass('active');
      break;
      case 16:
          $(".easter-offers ul li[data-id='1']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='2']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='3']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='4']").children('.egg').addClass('active');
      break;
      case 17:
          $(".easter-offers ul li[data-id='1']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='2']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='3']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='4']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='5']").children('.egg').addClass('active');
      break;
      case 18:
          $(".easter-offers ul li[data-id='1']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='2']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='3']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='4']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='5']").children('.egg').addClass('active');
          $(".easter-offers ul li[data-id='6']").children('.egg').addClass('active');
      break;
  }
  $(".easter-offers ul li .egg.active").click(function(){
      $(".deals-overlay").show();
      $(this).parent().children('.egg-card').show();
  });
  $(".easter-offers ul li .egg.active").click(function(){
      $(".deals-overlay").show();
      $(this).parent().children('.egg-card-2').show();
  });
  $(".deals-overlay").click(function(){
      $(".easter-offers ul li .egg-card").hide();
      $(this).hide();
  });
  $(".deals-overlay").click(function(){
      $(".easter-offers ul li .egg-card-2").hide();
      $(this).hide();
  });
});
