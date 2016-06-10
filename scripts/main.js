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
	var tagToHide = ('.' + tagName);
	var setToActive = ('#' + tagName.substr(4));
	$('.tags').children('#showAll').show();
	$('.tags').children().removeClass('tag-active');
	$('.tags').children(setToActive).addClass('tag-active');
	$('#card-container').children().show();
	$('#card-container').children().not(tagToHide).hide();
}

function showAll() {
	$('.tags').children().removeClass('tag-active');
	$('#card-container').children().show();
	$('.tags').children('#showAll').hide();
}
