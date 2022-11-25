$(document).ready(function(){
	if($(".sorting-data-widget").length){
		
		// Loop Through And Populate Event Items //
		var id = "";
		var statOne = "";
		var statOneLabel = "";
		var statTwo = "";
		var statTwoLabel = "";
		var statThree = "";
		var statThreeLabel = "";
		var statFour = "";
		var statFourLabel = "";
		var statFive = "";
		var statFiveLabel = "";
		var fullDate = "";
		var eventTitle = "";
		var eventSub = "";
		var eventDescription = "";
		var eventDescriptionImage = "";
		var itemImage = "";
		var eventProducts = "";
		var buttonLabel = "";
		
		$(".widget-data-item-list li.event-item").each(function(){
			id = $(this).attr("data-id");
			statOne = $(this).attr("data-stat-one");
			statOneLabel = $(this).attr("data-stat-one-label");
			statTwo = $(this).attr("data-stat-two");
			statTwoLabel = $(this).attr("data-stat-two-label");
			statThree = $(this).attr("data-stat-three");
			statThreeLabel = $(this).attr("data-stat-three-label");
			statFour = $(this).attr("data-stat-four");
			statFourLabel = $(this).attr("data-stat-four-label");
			statFive = $(this).attr("data-stat-five");
			statFiveLabel = $(this).attr("data-stat-five-label");
			fullDate = $(this).attr("data-full-date");
			eventTitle = $(this).attr("data-event-title");
			eventSub = $(this).attr("data-event-sub");
			eventDescription = $(this).attr("data-event-description");
			eventDescriptionImage = $(this).attr("data-event-description-image");
			itemImage = $(this).attr("data-item-image");
			eventProducts = $(this).attr("data-event-products");
			buttonLabel = $(this).attr("data-button-label");
			
			// Replace Item Image and Full Date //
			var imageDateHtml = $(this).find("div.image")[0].outerHTML;
			var replaceImageFullDate = imageDateHtml.replace('{{item-image}}', itemImage).replace('{{full-date}}', fullDate);
			$(this).find("div.image")[0].outerHTML = replaceImageFullDate;
			
			// Replace Item Event Headers //
			var eventHeaderHtml = $(this).find("div.event-header")[0].outerHTML;
			var replaceTitleSubTitle = eventHeaderHtml.replace('{{event-title}}', eventTitle).replace('{{event-sub}}', eventSub);
			$(this).find("div.event-header")[0].outerHTML = replaceTitleSubTitle;
			
			// Replace Stats //
			var eventStatsHtml = $(this).find("div.stats")[0].outerHTML;
			var replaceStats = eventStatsHtml.replace('{{stat-one-label}}', statOneLabel).replace('{{stat-one}}', statOne).replace('{{stat-two-label}}', statTwoLabel).replace('{{stat-two}}', statTwo).replace('{{stat-three-label}}', statThreeLabel).replace('{{stat-three}}', statThree);
			$(this).find("div.stats")[0].outerHTML = replaceStats;
			
			// Replace Buttons //
			var buttonsHtml = $(this).find("div.buttons")[0].outerHTML;
			var replaceButtons = buttonsHtml.replace('{{data-id}}', id).replace('{{button-label}}', buttonLabel);
			$(this).find("div.buttons")[0].outerHTML = replaceButtons;
		});
		
		// Display Full Data Item //
		$(".widget-data-item-list li.event-item").click(function(){
			
			
			id = $(this).attr("data-id");
			statOne = $(this).attr("data-stat-one");
			statOneLabel = $(this).attr("data-stat-one-label");
			statTwo = $(this).attr("data-stat-two");
			statTwoLabel = $(this).attr("data-stat-two-label");
			statThree = $(this).attr("data-stat-three");
			statThreeLabel = $(this).attr("data-stat-three-label");
			statFour = $(this).attr("data-stat-four");
			statFourLabel = $(this).attr("data-stat-four-label");
			statFive = $(this).attr("data-stat-five");
			statFiveLabel = $(this).attr("data-stat-five-label");
			fullDate = $(this).attr("data-full-date");
			eventTitle = $(this).attr("data-event-title");
			eventSub = $(this).attr("data-event-sub");
			eventDescription = $(this).attr("data-event-description");
			eventDescriptionImage = $(this).attr("data-event-description-image");
			itemImage = $(this).attr("data-item-image");
			eventProducts = $(this).attr("data-event-products");
			buttonLabel = $(this).attr("data-button-label");
			
			// Clear Current HTML //
			
			$(".viewer-info-bar .title-section .main-heading").html("");
			$(".viewer-info-bar .title-section .sub-heading").html("");
			$(".viewer-info-bar .full-stats .item-one .label").html("");
			$(".viewer-info-bar .full-stats .item-one .value").html("");
			$(".viewer-info-bar .full-stats .item-two .label").html("");
			$(".viewer-info-bar .full-stats .item-two .value").html("");
			$(".viewer-info-bar .full-stats .item-three .label").html("");
			$(".viewer-info-bar .full-stats .item-three .value").html("");
			$(".viewer-info-bar .full-stats .item-four .label").html("");
			$(".viewer-info-bar .full-stats .item-four .value").html("");
			$(".viewer-info-bar .full-stats .item-five .label").html("");
			$(".viewer-info-bar .full-stats .item-five .value").html("");
			$(".data-item-viewer .data-viewer-description").html("");
			$(".data-item-viewer .data-viewer-image").html("");
			
			// Populate Viewer Bar //
			$(".viewer-info-bar .title-section .main-heading").prepend(eventTitle);
			$(".viewer-info-bar .title-section .sub-heading").prepend(eventSub);
			
			$(".viewer-info-bar .full-stats .item-one .label").prepend(statOneLabel);
			$(".viewer-info-bar .full-stats .item-one .value").prepend(statOne);
			
			$(".viewer-info-bar .full-stats .item-two .label").prepend(statTwoLabel);
			$(".viewer-info-bar .full-stats .item-two .value").prepend(statTwo);
			
			$(".viewer-info-bar .full-stats .item-three .label").prepend(statThreeLabel);
			$(".viewer-info-bar .full-stats .item-three .value").prepend(statThree);
			
			$(".viewer-info-bar .full-stats .item-four .label").prepend(statFourLabel);
			$(".viewer-info-bar .full-stats .item-four .value").prepend(statFour);
			
			$(".viewer-info-bar .full-stats .item-five .label").prepend(statFiveLabel);
			$(".viewer-info-bar .full-stats .item-five .value").prepend(statFive);
			
			// Popular Full Viewer //
			$(".data-item-viewer .data-viewer-description").prepend(eventDescription);
			$(".data-item-viewer .data-viewer-image").prepend(eventDescriptionImage);
			
			// Show And Hide Elements //
			
			$(".sorting-form").hide();
			$(".viewer-info-bar").show();
			
			$(".widget-data-item-list").hide();
			$(".data-item-viewer").show();
		});
		
		// Back To List Button //
		
		$(".viewer-info-bar .clear-filter-button").click(function(){
			// Show And Hide Elements //
			
			$(".sorting-form").show();
			$(".viewer-info-bar").hide();
			
			$(".widget-data-item-list").show();
			$(".data-item-viewer").hide();			
						
		});
		
		// Filter //
		
		$(".dropdown-item select").change(function(){
			var filterOne = $("#filter-one").val();
			var filterTwo = $("#filter-two").val();
			var filterThree = $("#filter-three").val();
			var filterString = "";
			
			if(filterOne === "PS" && filterTwo === "PS" && filterThree === "PS"){
				$(".widget-data-item-list li").show();
			}else{
				if(filterOne != "PS"){
					filterString = filterString + "[filter-one="+filterOne+"]";
				}
				
				if(filterTwo != "PS"){
					if(filterOne == "PS"){
						filterString = filterString + "[filter-two="+filterTwo+"]";	
					}else{
						filterString = filterString + "," + "[filter-two="+filterTwo+"]";	
					}
				}
				
				if(filterThree != "PS"){
					if(filterOne == "PS"){
						filterString = filterString + "[filter-three="+filterThree+"]";
					}else if(filterTwo == "PS"){
						filterString = filterString + "," + "[filter-three="+filterThree+"]";
					}else{
						filterString = filterString + "," + "[filter-three="+filterThree+"]";
					}
					
				}
				
				$(".widget-data-item-list li").hide();
				$(filterString).show();
			}
		});
		
		// Filter Reset Button //
		
		$(".sorting-form .clear-filter-button").click(function(){
			$('#filter-one').prop('selectedIndex',0);
			$('#filter-two').prop('selectedIndex',0);
			$('#filter-three').prop('selectedIndex',0);
			$(".widget-data-item-list li").show();
		});
	}
});