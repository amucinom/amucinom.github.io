$(document).ready(function() {

	$(window).scroll(function() {

		var top = $(document).scrollTop() || $('body').scrollTop() || $('html').scrollTop();
		if (top > 0) {
			$('.nav').css('box-shadow', '0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)');
		} else if (top === 0) {
			$('.nav').css('box-shadow', 'none');
		}

	});
});

function getTagID(tagName) {
	$('#card-container').children().show();
	var tagToHide = ('.' + tagName);
	$('#card-container').children().not(tagToHide).hide();
}
