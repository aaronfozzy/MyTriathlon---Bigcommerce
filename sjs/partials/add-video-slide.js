$(document).ready(function(){
	if($("body").hasClass('product')){
		var videoSlideUrl = "";
		// Gather Custom Fields Values From Page //
		$("#tab-specifications dl").each(function(){
			var label = $(this).children("dt").html();
			var content = $(this).children("dd").html();
			switch(label){
				case "video-slide-url:":
					videoSlideUrl = content;
				break;
			}
			
			// Slide Html //
			var videoSliderHtml = '<video class="video-widget" allow="autoplay" id="i8fnfh" src="'+videoSlideUrl+'" loop="loop" autoplay="autoplay" muted="muted"></video>';
			
			var videoSliderThumb = '<li class="slick-slide slick-cloned" style="width: 135px;" data-slick-index="-3" id="" aria-hidden="true" tabindex="-1"><a class="productView-thumbnail-link" href="" data-image-gallery-item="" tabindex="-1"></a></li>';
			
		});	
	}
});
