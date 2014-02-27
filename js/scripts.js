// JavaScript Document

jQuery(function($) {

	$(document).ready(function() {
	
		$('.banner').before('<div id="nav1" class="nav">').cycle({
				fx:     'fade',
				speed:  3000,
				startingSlide: 0,
				pager:  '#nav1'		
	    });	
		
		$(".chzn-select").chosen();	
	});
	
	
});
