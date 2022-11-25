var countdownMarkup = '<div class="countdown-holder">Order in the next <span id="hours" class="hours"></span> <span id="minutes" class="minutes"></span> <span id="seconds" class="seconds"></span> to qualify for priority shipping</div>';

var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var start = new Date;
start.setHours(15, 0, 0);

function pad(num) {
  return ("0" + parseInt(num)).substr(-2);
}

function tick() {
  var now = new Date;
  var currentDay = weekday[now.getDay()];
  if (now > start) { // too late, go to tomorrow
    start.setDate(start.getDate() + 1);
  }
  var remain = ((start - now) / 1000);
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  var ss = pad(remain % 60);
  if(currentDay == "Friday" && hh >= "15"){
    $(".countdown-holder").hide();
  }else if(currentDay == "Saturday"){
    $(".countdown-holder").hide();
  }else if(currentDay == "Sunday"){
    $(".countdown-holder").hide();
  }else{
    if(hh > 12){
      $(".countdown-holder").hide();
    }else{
      $(".hours").html(hh + " hours");
      $(".minutes").html(mm + " minutes");
      $(".seconds").html(ss + " seconds");
    }
  }
  setTimeout(tick, 1000);
}

tick();
