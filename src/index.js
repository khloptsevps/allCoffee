import 'normalize.css';
import './styles/main.scss';

import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  breakpoints: {
    1000: {
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    370: {
      navigation: {
        enabled: false,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },
});

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector('#list').cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener('click', hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle('open');
  hamb.classList.toggle('active');
  body.classList.toggle('noscroll');
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener('click', closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove('open');
  hamb.classList.remove('active');
  body.classList.remove('noscroll');
}
