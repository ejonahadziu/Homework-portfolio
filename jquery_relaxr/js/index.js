$(document).ready(function() {

	// $('nav').click(turnwhite);
	$('.readmore').click(showhiddentext);
	$('.readless').click(hidehiddentext);
	$('.learnmore').click(showmoretext);

	// // function turnwhite() {
	// $('.container').click(function () {
	// 	$('.container').css({'color', 'white'})
	// }
	

	function showhiddentext () {
		$('#show-this-on-click').slideDown();
		$('.readless hide').show();
		$('.readmore').hide();
		event.preventDefault();

	}

	function hidehiddentext () {
		$('#show-this-on-click').slideUp();
		$('.readmore').show();
		$('.readless hide').hide();
		// event.preventDefault();
	}

	function showmoretext () {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
		event.preventDefault();
	}
		
});