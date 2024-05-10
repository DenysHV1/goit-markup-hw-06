// модальне вікно
const closeButton=document.querySelector('.button-modal-close');
const isButton=document.querySelector('.order__button');
const openModal=document.querySelector('.is-open');
const closeModal=document.querySelector('.modal-overlay');
// бургер меню
const closeButtonMedia=document.querySelector('.close-media-button');
const burgerButton=document.querySelector('.burger-menu');
const openMenu=document.querySelector('.is-open-menu');
const closeMenu=document.querySelector('.media-menu');

const itemMenu1=document.querySelector('.media-list-button1');
const itemMenu2=document.querySelector('.media-list-button2');
const itemMenu3=document.querySelector('.media-list-button3');

// модальне вікно
isButton.addEventListener('click', ()=>{
	closeModal.classList.toggle('is-open');
	});


closeButton.addEventListener('click', ()=>{
	closeModal.classList.remove('is-open');
	});


// бургер меню
burgerButton.addEventListener('click', ()=>{
	closeMenu.classList.toggle('is-open-menu');
	});
closeButtonMedia.addEventListener('click', ()=>{
	closeMenu.classList.remove('is-open-menu');
});


itemMenu1.addEventListener('click', ()=>{
	closeMenu.classList.remove('is-open-menu');
});
itemMenu2.addEventListener('click', ()=>{
	closeMenu.classList.remove('is-open-menu');
});
itemMenu3.addEventListener('click', ()=>{
	closeMenu.classList.remove('is-open-menu');
});

// в JS можу тільки щось відкривати і закривати, на данний момент, логіу цьго процесу розумію))
