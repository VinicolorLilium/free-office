$(function(){
	// функция, делающая картинку в элементе с классом ibg фоновым изображением
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	};
	ibg();
	//======================================================================
	// табы
	$('body').on('click', '.tab-nav a', function() {
		$('.tab-nav a').removeClass('active');
		$(this).addClass('active');
		var href = $(this).attr('href');
		$('.tab-pane').removeClass('active').removeClass('in');
		var id = $(href).addClass('active');
		setTimeout(function() {
			$(href).addClass('in');
		});
		return false;
	});
	//======================================================================
	// слайдеры
	$('.work-project__slider').slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
		fade: true
	});

	$('.gallery-slider').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true
	});

});