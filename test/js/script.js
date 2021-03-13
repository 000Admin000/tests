$('.burger').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu-btn-active')
	$('.menu-tell').toggleClass('menu-tell-active')
	$('body').toggleClass('body-active')
	$('.burger-1').toggleClass('burger-1-active')
	$('.burger-2').toggleClass('burger-2-active')
	$('.burger-3').toggleClass('burger-3-active')
}) 

