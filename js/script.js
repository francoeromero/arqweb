const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})




document.querySelectorAll(".gallery__img img").forEach(el=>{
	el.addEventListener("click", function(ev){
		this.parentNode.classList.add("active");
	})
});


// carusel

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

initializeSlider();
document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider(){

	slides[slideIndex].classList.add('displaySlide');
	intervalId = setInterval(nextSlide, 5000);

}

function showSlide(index){

	if(index >= slides.length){
		slideIndex = 0;

	}
	else if(index < 0){
		slideIndex = slides.length -1;
	}

	slides.forEach(slide =>{
		slide.classList.remove('displaySlide');
	});
	slides[slideIndex].classList.add('displaySlide');
}

function prevSlide(){
	clearInterval(intervalId);
	slideIndex--;
	showSlide(slideIndex);
}

function nextSlide(){
	slideIndex++;
	showSlide(slideIndex)
}