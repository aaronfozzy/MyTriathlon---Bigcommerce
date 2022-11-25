$(document).ready(function(){
	if($("body").hasClass('category')){
		$(".accordion-block").children(".toggleLink").removeClass("is-open");
		$(".accordion-block").children(".accordion-content").removeClass("is-open");
	}
});