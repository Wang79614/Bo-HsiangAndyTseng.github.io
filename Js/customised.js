// Initialization with jQuery

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		
		autoScrolling:false,
		scrollOverflow:true,
		scrollHorizontally: true,

		
	});
	new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
	menu: '#js_menu'
	});
	//methods
	$.fn.fullpage.setAllowScrolling(true);
});
