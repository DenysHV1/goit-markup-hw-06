
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~1
// модальне вікно
const modal=document.querySelector('.modal-overlay');

const openModalButton=document.querySelector('.order__button');

const closeModalButton=document.querySelector('.button-modal-close');

// open modal
openModalButton.addEventListener('click', ()=>{
	modal.classList.toggle('is-open');
	});
// close modal
closeModalButton.addEventListener('click', ()=>{
	modal.classList.remove('is-open');
	});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~2
// бургер меню
const mediaMenu=document.querySelector('.media-menu');

const burgerButton=document.querySelector('.burger-menu');

const closeMediaButton=document.querySelector('.close-media-button');
const buttonItemMenu1=document.querySelector('.media-list-button1');
const buttonItemMenu2=document.querySelector('.media-list-button2');
const buttonItemMenu3=document.querySelector('.media-list-button3');

//1 open menu
burgerButton.addEventListener('click', ()=>{
	mediaMenu.classList.toggle('is-open-menu');
	});
//2 close menu
closeMediaButton.addEventListener('click', ()=>{
	mediaMenu.classList.remove('is-open-menu');
});
//3 close menu
buttonItemMenu1.addEventListener('click', ()=>{
	mediaMenu.classList.remove('is-open-menu');
});
//4 close menu
buttonItemMenu2.addEventListener('click', ()=>{
	mediaMenu.classList.remove('is-open-menu');
});
//5 close menu
buttonItemMenu3.addEventListener('click', ()=>{
	mediaMenu.classList.remove('is-open-menu');
});


// ~~~~~~~~3 open bottom ~~~~~~~~~~~~~~~~3
const scrollUp=document.querySelector('.scroll-up');

window.addEventListener('scroll', function(){
	scrollUp.classList.toggle("is-open-scroll", window.scrollY>500)
})