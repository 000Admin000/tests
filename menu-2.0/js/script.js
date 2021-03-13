$('.burger').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu-btn-active')
	$('.menu-tell').toggleClass('menu-tell-active')
	$('body').toggleClass('body-active')
	$('.navigation').toggleClass('navigation-active')
}) 

