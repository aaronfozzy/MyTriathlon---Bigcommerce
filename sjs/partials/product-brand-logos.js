$(document).ready(function(){
  if($("body").hasClass('product')){
    var brandHtml = $(".productView-brand a span").html();
    if (typeof brandHtml !== 'undefined') {
      var brandString = brandHtml.toLowerCase();
      var spacesBrandArray = brandString.split(" ");
      var stringArrayCount = spacesBrandArray.length;
      var finalLogoPath = "";
      if(stringArrayCount > 1){
        switch(stringArrayCount){
          case 2:
            finalLogoPath = spacesBrandArray[0] + "-" + spacesBrandArray[1];
            $(".productView-brand a span").html("");
            $(".productView-brand a").append("<img class='brand-string-logo' src='https://mytriathlon.co.uk/content/brand-logos/"+finalLogoPath+".png'/>");
          break;
          case 3:
            finalLogoPath = spacesBrandArray[0] + "-" + spacesBrandArray[1] + spacesBrandArray[2];
            $(".productView-brand a span").html("");
            $(".productView-brand a").append("<img class='brand-string-logo' src='https://mytriathlon.co.uk/content/brand-logos/"+finalLogoPath+".png'/>");
          break;
          case 4:
            finalLogoPath = spacesBrandArray[0] + "-" + spacesBrandArray[1] + spacesBrandArray[3];
            $(".productView-brand a span").html("");
            $(".productView-brand a").append("<img class='brand-string-logo' src='https://mytriathlon.co.uk/content/brand-logos/"+finalLogoPath+".png'/>");
          break;
          case 5:
            finalLogoPath = spacesBrandArray[0] + "-" + spacesBrandArray[1] + spacesBrandArray[4];
            $(".productView-brand a span").html("");
            $(".productView-brand a").append("<img class='brand-string-logo' src='https://mytriathlon.co.uk/content/brand-logos/"+finalLogoPath+".png'/>");
          break;
        }
      }else{
        finalLogoPath = brandString;
        $(".productView-brand a span").html("");
        $(".productView-brand a").append("<img class='brand-string-logo' src='https://mytriathlon.co.uk/content/brand-logos/"+finalLogoPath+".png'/>");
      }
    }
  }
});
