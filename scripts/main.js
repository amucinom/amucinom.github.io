$(document).ready(function() {

	$(window).scroll(function() {

		var top = $(document).scrollTop() || $('body').scrollTop() || $('html').scrollTop();
		if (top > 0) {
			$('.nav').css('box-shadow', '0 2px 5px 0 rgba(0, 0, 0, 0.26');
		} else if (top === 0) {
			$('.nav').css('box-shadow', 'none');
		}

	});

});
