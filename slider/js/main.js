
let count = 0;
let sliderImg = document.getElementsByClassName('slider-img');
let sliderBl = document.getElementById('slider-bl');
let next = document.getElementById('next');
let prew = document.getElementById('prew');
let indicator = document.getElementsByClassName('indicators');
let circle = document.getElementsByClassName('circle');






	next.onclick = function plus() {
		if(count > sliderImg.length - 2) {
			count = count;
		}
		else if(count < sliderImg.length) {
			count++;
			sliderBl.style = "left:"+ count * (-100) + '%' +";";
		};
		circle[count-1].classList.remove ('circle-active')
		circle[count].classList.add ('circle-active');
	};
	prew.onclick = function minus() {
		if(count < 1) {
			count = 0;
		}
		else {
			count--;
			sliderBl.style = "left:"+ count * (-100) + '%' +";";
		};
		circle[count+1].classList.remove ('circle-active')
		circle[count].classList.add ('circle-active');
	};







