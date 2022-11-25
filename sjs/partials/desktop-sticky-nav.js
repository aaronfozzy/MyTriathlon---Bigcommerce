$("header.sticky-header .navPages-container nav.navPages .navPages-list li.navPages-item a").on("click", function(event){
	event.preventDefault();
	console.log("Clicked");
	$(this).children(".navpage-subMenu").show();
});