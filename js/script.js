/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const ref = {
  promo: document.querySelectorAll(".promo__adv img"),
  poster: document.querySelector(".promo__bg"),
  genre: document.querySelector(".promo__genre"),
  interactiveList: document.querySelector(".promo__interactive-list"),
  //   interactiveItem: document.querySelectorAll(".promo__interactive-item"),
};

ref.promo.forEach((item) => item.remove());
ref.genre.textContent = "драма";
ref.poster.style.backgroundImage = 'url("img/bg.jpg")';
ref.interactiveList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach(
  (item, i) =>
    (ref.interactiveList.innerHTML += `
<li class="promo__interactive-item">
${i + 1} ${item}
<div class="delete"></div>
</li>
`)
);
