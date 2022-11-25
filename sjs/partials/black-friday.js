// Black Friday JS - Requires Moment and jQuery Cookies //

$(document).ready(function(){

  var currentUrl = window.location.href;
  var splitCurrentUrl = currentUrl.split("/")[3];
  if(splitCurrentUrl == "black-friday-2022") {
    $("body").addClass("black-friday");
    $("body").addClass("full-back-image");
    $(".body").hide();
  }

  var cookie = Cookies.get('black_friday');
  if(cookie == "signedup"){
    $(".black-friday-form").addClass("inactive");
    $(".black-friday-overlay").addClass("inactive");
  }
  setInterval(function () {
    $(".black-friday-offers-holder ul li").each(function(){
      var type = $(this).attr('data-type');
      var start = $(this).attr('data-start');
      var expire = $(this).attr('data-expiry');
      var currentdate = new Date();
      var day = currentdate.getDate();
      var month = currentdate.getMonth() + 1;
      var year  = currentdate.getFullYear();
      var hours = currentdate.getHours();
      var minutes = currentdate.getMinutes();
      var seconds = currentdate.getSeconds();

      var parseStart = moment(start);
      var parseExpiry = moment(expire);
      var parseCurrentDate = moment(currentdate);

      if(typeof start !== 'undefined'){
        var splitStart = start.split(" ");
        var splitStartDate = splitStart[0];
        var splitStartTime = splitStart[1];
        var todayStartString = year + "-" + month + "-" + day;
        var finalStart = todayStartString + " " + splitStartTime;
        $(this).attr('data-start', finalStart);
        var splitExpiry = expire.split(" ");
        var splitExpiryDate = splitExpiry[0];
        var splitExpiryTime = splitExpiry[1];
        var todayExpiryString = year + "-" + month + "-" + day;
        var finalExpiry = todayExpiryString + " " + splitExpiryTime;
        $(this).attr('data-expiry', finalExpiry);
      }

      switch(type){
        case 'timed':
          if(parseCurrentDate >= parseStart && parseCurrentDate < parseExpiry){
            $(this).addClass('timed-active');
            $(this).removeClass('expired');
            var link = $(this).attr("data-link");
            $(this).click(function(event){
              event.preventDefault();
              window.location.href = link;
            });
            var countDownDate = parseExpiry;
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $(this).find(".top-timer").children('.top-hours').children('.number').html(hours);
            $(this).find(".top-timer").children('.top-minutes').children('.number').html(minutes);
            $(this).find(".top-timer").children('.top-seconds').children('.number').html(seconds);
          }else if(parseCurrentDate > parseExpiry){
            $(this).addClass('expired');
          }else if(parseCurrentDate < parseStart){
            $(this).addClass('locked');
            $(this).removeClass('expired');
            var countDownDate = parseStart;
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $(this).find(".bottom-timer").children('.bottom-hours').children('.number').html(hours);
            $(this).find(".bottom-timer").children('.bottom-minutes').children('.number').html(minutes);
            $(this).find(".bottom-timer").children('.bottom-seconds').children('.number').html(seconds);
          }
        break;
        case 'active':
            $(this).addClass('active');
        break;
      }
    });
  }, 1000);
});
