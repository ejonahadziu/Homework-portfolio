$(document).ready(function() {

	$('.navitems').click(turnwhite);
	$('.readmore').click(showhiddentext);
	$('.readless.hide').click(hidehiddentext);
	$('.learnmore').click(showmoretext);

	function turnwhite(event) {
		$('.navitems').css({color: 'yellow'});
		$(event.currentTarget).css({color: 'white'});
	}

	function showhiddentext () {
		$('#show-this-on-click').slideDown();
		$('.readless.hide').show();
		$('.readmore').hide();
		event.preventDefault();
	}


	function hidehiddentext () {
		$('#show-this-on-click').slideUp();
	 	$('.readless.hide').hide();
	 	$('.readmore').show();
	 	event.preventDefault();
	}

	function showmoretext () {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
		event.preventDefault();
	}
		
});