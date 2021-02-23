//открытие модального окна с картой
const linkMap = document.querySelector('.contacts-map-link');
let modalMap = document.querySelector('.modal-map');

linkMap.addEventListener ('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('show-modal');
});


//открытие модального окна с контактной формой
const linkContactForm = document.querySelector('.contact-form-link');
let modalContactForm = document.querySelector('.modal-contact');

linkContactForm.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContactForm.classList.add('show-modal');
});

//кнопка закрыть модальное окно
let buttonsClose = document.querySelectorAll('.modal-close');
for (let i = 0; i < buttonsClose.length; i++) {
  buttonsClose[i].addEventListener('click', function() {
    modalMap.classList.remove('show-modal');
    modalContactForm.classList.remove('show-modal');
  });
}

//слайдер популярных товаров
let slides = document.querySelectorAll('.popular-slide-item');
let slideControls = document.querySelectorAll('.slide-control');
for (let i = 0; i < slideControls.length; i++) {
  slideControls[i].addEventListener('click', function() {
    if (!slideControls[i].classList.contains('slide-check')) {
      for (let j = 0; j < slideControls.length; j++) {
        slideControls[j].classList.remove('slide-check');
        slides[j].classList.remove('popular-slide-show');
      }
    slideControls[i].classList.add('slide-check');
    slides[i].classList.add('popular-slide-show');
    }
  });
}

//слайдер преимуществ компании
let


