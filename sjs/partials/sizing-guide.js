$(document).ready(function(){
  if($("body").hasClass('product')){
    var sizingValue = "";

    // Gather Custom Fields Values From Page
    $("#tab-specifications dl").each(function(){
      var label = $(this).children("dt").html();
      var content = $(this).children("dd").html();
      switch(label){
        case "sizing:":
          sizingValue = content;
        break;
      }
    });

    // Inject Variables Inside Markup //
    var sizingGuideButton = '<a class="sizing-guide-btn" href="#sizing-guide-panel">Sizing Guide</a>';

    var sizingGuideImage = '<img id ="sizing-guide-panel-image" src="https://mytriathlon.co.uk/content/sizing-guides/'+sizingValue+'.png"/>';

    var sizingGuideTab = '<li class="tab" id="sizing-guide-tab"><a class="tab-title" href="#sizing-guide-panel"><span class="icon-brand show theme-icon" data-icon=""></span><span class="show">Sizing</span></a></li>';
    var sizingGuidePanel = '<div class="tab-content" id="sizing-guide-panel"><img id ="sizing-guide-panel-image" src="https://mytriathlon.co.uk/content/sizing-guides/'+sizingValue+'.png"/></div>';


    var sizingTabMarkup = "";
    var sizingPanelMarkup = "";
    var sizingButtonMarkup = "";

    // Check If Sizing Has Data And Render Panel and Tab On The Page //
    if(sizingValue != ""){
      // Render the Tab //
      sizingTabMarkup = sizingGuideTab;
      $(".productView-description .tabs").append(sizingTabMarkup);

      // Render Panel for Tab //
      sizingPanelMarkup = sizingGuidePanel;
      $(".productView-description .tabs-contents").append(sizingPanelMarkup);

      // Render Sizing Button //
      sizingButtonMarkup = sizingGuideButton;
      $(".productView-options").prepend(sizingButtonMarkup);
    }
  }
  $(".sizing-guide-btn").on("click", function(event){
    $(".productView-description .tabs .tab").removeClass("is-active");
    $(".tabs-contents .tab-content").removeClass("is-active");
    $("#sizing-guide-panel").removeClass("is-active");
    $("#sizing-guide-tab").addClass("is-active");
    $("#sizing-guide-panel").addClass("is-active");
  });
});
