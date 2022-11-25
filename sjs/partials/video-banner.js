$(document).ready(function(){
  $(".banner-button").click(function(){
    var currentVideo = $(this).attr("data-video");
    var video = "";
    console.log(currentVideo);
    $(".banner-button").addClass("invisible");
    $(".banner-button").removeClass("visible");
    $(".video-banner-player").addClass("visible");
    $(".video-banner-player").removeClass("invisible");
    video = '<iframe width="1440" height="600" src="https://www.youtube.com/embed/'+currentVideo+'?enablejsapi&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    $("#video").append(video);
  });
  $(".video-banner-back").click(function(){
    $(".video-banner-player").addClass("invisible");
    $(".video-banner-player").removeClass("visible");
    $(".banner-button").addClass("visible");
    $(".banner-button").removeClass("invisible");
    $("#video").html("");
  });
});
