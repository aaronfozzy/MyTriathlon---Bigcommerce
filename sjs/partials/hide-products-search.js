// Actual Search Page //
$(window).ready(function(){
  setInterval(function () {
    if($("body").hasClass('search')){
      $("ul.productGrid li.product article[data-product-id='8065'").parent("li").hide();
    }
  },1);
});
