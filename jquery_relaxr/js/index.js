$(document).ready(function() {

	$('.navitems').click(turnwhite);
	$('.readmore').click(showhiddentext);
	$('.readless.hide').click(hidehiddentext);
	$('.learnmore').click(showmoretext);

	function turnwhite(event) {
		$('.navitems').css({color: '#f9e42e'});
		$(event.currentTarget).css({color: 'white'});
	}

	function showhiddentext (event) {
		$('#show-this-on-click').slideDown();
		$('.readless.hide').show();
		$('.readmore').hide();
		event.preventDefault();
	}


	function hidehiddentext (event) {
		$('#show-this-on-click').slideUp();
	 	$('.readless.hide').hide();
	 	$('.readmore').show();
	 	event.preventDefault();
	}

	function showmoretext (event) {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
		event.preventDefault();
	}
		
});