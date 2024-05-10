
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// модальне вікно
const closeModalButton=document.querySelector('.button-modal-close');
const openModalButton=document.querySelector('.order__button');
const modal=document.querySelector('.modal-overlay');
const scrollUp=document.querySelector('.is-open-scroll');

// open modal
openModalButton.addEventListener('click', ()=>{
	modal.classList.toggle('is-open');
	});
// close modal
closeModalButton.addEventListener('click', ()=>{
	modal.classList.remove('is-open');
	});
// open modal + remove scroll
	openModalButton.addEventListener('click', ()=>{
	scrollUp.classList.remove('is-open-scroll');
});
// close modal + toggle scroll
closeModalButton.addEventListener('click', ()=>{
	scrollUp.classList.toggle('is-open-scroll');
	});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// бургер меню
const closeMediaButton=document.querySelector('.close-media-button');
const burgerButton=document.querySelector('.burger-menu');
const closeMenu=document.querySelector('.media-menu');

const buttonItemMenu1=document.querySelector('.media-list-button1');
const buttonItemMenu2=document.querySelector('.media-list-button2');
const buttonItemMenu3=document.querySelector('.media-list-button3');

// open menu
burgerButton.addEventListener('click', ()=>{
	closeMenu.classList.toggle('is-open-menu');
	});
// close menu
closeMediaButton.addEventListener('click', ()=>{
	closeMenu.classList.remove('is-open-menu');
});
// close menu
buttonItemMenu1.addEventListener('click', ()=>{
	closeMenu.classList.remove('is-open-menu');
});
// close menu
buttonItemMenu2.addEventListener('click', ()=>{
	closeMenu.classList.remove('is-open-menu');
});
// close menu
buttonItemMenu3.addEventListener('click', ()=>{
	closeMenu.classList.remove('is-open-menu');
});


// ~~~~~~~~3 open bottom ~~~~~~~~~~~~~~~~
const scrollOpen = document.querySelector('.scroll-up.is-open-scroll');

window.addEventListener('scroll', function(){
	scrollOpen.classList.toggle("active", window.scrollY>500)
})