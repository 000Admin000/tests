
let count = 0;
let previous = count;
let sliderImg = document.getElementsByClassName('slider-img');
let sliderBl = document.getElementById('slider-bl');
let next = document.getElementById('next');
let prew = document.getElementById('prew');
let indicator = document.getElementsByClassName('indicators');
let circle = document.getElementsByClassName('circle');


function plus() {
	if(count < sliderImg.length-1) {
		count++;
		sliderBl.style = "left:"+ count * (-100) + '%' +";";

		circle[previous].classList.remove('circle-active');
		circle[count].classList.add('circle-active');
		previous = count;
	}
	else if(count = sliderImg.length - 1) {
		count = 0;
		sliderBl.style = "left:" + 0 + '%' +";";

		circle[previous].classList.remove('circle-active');
		circle[count].classList.add('circle-active');
		previous = count;
	};
};

function minus() {
	if(count < 1) {
		count = 0;
	}
	else {
		count--;
		sliderBl.style = "left:"+ count * (-100) + '%' +";";

		circle[previous].classList.remove('circle-active');
		circle[count].classList.add('circle-active');
		previous = count;
	};
};

	next.onclick = plus();
	prew.onclick = minus();

let interval1 = setInterval(plus, 5000);




