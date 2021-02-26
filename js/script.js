//открытие модального окна с картой
let linkMap = document.querySelector('.contacts-map-link');
let modalMap = document.querySelector('.modal-map');

linkMap.addEventListener ('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('show-modal');
});


//открытие модального окна с контактной формой
let linkContactForm = document.querySelector('.contact-form-link');
let modalContactForm = document.querySelector('.modal-contact');
let form = modalContactForm.querySelector('.contact-form');
let user = modalContactForm.querySelector('.contact-name');
let email = modalContactForm.querySelector('.contact-email');
let storageUser = localStorage.getItem('user');
let storageEmail = localStorage.getItem('email');

linkContactForm.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContactForm.classList.add('show-modal');
  user.focus();
  if (storageUser) {
    user.value = storageUser;
  }
  if (storageEmail) {
    email.value = storageEmail;
  }
});

//отправка данных контактной формы
form.addEventListener('submit', function(evt) {
  if (!user.value || !email.value) {
    evt.preventDefault();
    alert('Введите имя и адрес электронной почты');
  }
  else {
  localStorage.setItem('user', user.value);
  localStorage.setItem('email', email.value);
  }
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
let slidesPopular = document.querySelectorAll('.popular-slide-item');
let slideControls = document.querySelectorAll('.slide-control');
for (let i = 0; i < slideControls.length; i++) {
  slideControls[i].addEventListener('click', function() {
    if (!slideControls[i].classList.contains('slide-check')) {
      for (let j = 0; j < slideControls.length; j++) {
        slideControls[j].classList.remove('slide-check');
        slidesPopular[j].classList.remove('popular-slide-show');
      }
    slideControls[i].classList.add('slide-check');
    slidesPopular[i].classList.add('popular-slide-show');
    }
  });
}

//слайдер преимуществ компании
let slidesAdvantages = document.querySelectorAll('.advantages-slide');
let slideAdvantagesWrappers = document.querySelectorAll('.button-wrap');
let slideAdvantagesControls = document.querySelectorAll('.advantages-button');
for (let i = 0; i < slideAdvantagesControls.length; i++) {
  slideAdvantagesControls[i].addEventListener('click', function() {
    if (!slideAdvantagesWrappers[i].classList.contains('current')) {
      for (let j = 0; j < slideAdvantagesWrappers.length; j++) {
        slideAdvantagesWrappers[j].classList.remove('current');
        slidesAdvantages[j].classList.remove('show');
      }
    slideAdvantagesWrappers[i].classList.add('current');
    slidesAdvantages[i].classList.add('show');
    }
  });
}


