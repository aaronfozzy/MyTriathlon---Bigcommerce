$(document).ready(function(){
  if($("body").hasClass('product')){
    var detectColourField = $(".form-field[data-product-attribute=swatch] label.form-label--inlineSmall").html();
    if(typeof detectColourField !== 'undefined'){
      if(detectColourField.length > 1){
        var splitColourField = detectColourField.split(":");
        var colourFieldOne = "Colour:";
        var colourFieldTwo = splitColourField[1];
        var finalVariable = colourFieldOne + colourFieldTwo;
        $(".form-field[data-product-attribute=swatch] label.form-label--inlineSmall").html(finalVariable);
      }
    }
  }
});
