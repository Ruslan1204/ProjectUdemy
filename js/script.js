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
  addForm: document.querySelector("form.add"),
  input: document.querySelector(".adding__input"),
  button: document.querySelector("button"),
  checkbox: document.querySelector('[type="checkbox"]'),
};

ref.addForm.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  let newFilm = ref.input.value;
  const favorite = ref.checkbox.checked;

  if (newFilm) {
    if (newFilm.length > 21) {
      newFilm = `${newFilm.substring(0, 22)}...`;
    }

    if (favorite) {
      alert("Додаєм улюблений фільм");
    }

    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);

    createMovieList(movieDB.movies, ref.interactiveList);
  }

  evt.target.reset();
}

const deletePromo = (arr) => {
  arr.forEach((item) => item.remove());
};

const makeChanges = () => {
  ref.genre.textContent = "драма";
  ref.poster.style.backgroundImage = 'url("img/bg.jpg")';
};

const sortArr = (arr) => {
  arr.sort();
};

function createMovieList(films, perent) {
  perent.innerHTML = "";

  sortArr(films);

  films.forEach(
    (item, i) =>
      (perent.innerHTML += `
  <li class="promo__interactive-item">
  ${i + 1} ${item}
  <div class="delete"></div>
  </li>
  `)
  );

  document.querySelectorAll(".delete").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      movieDB.movies.splice(i, 1);
      createMovieList(films, perent);
    });
  });
}
deletePromo(ref.promo);
makeChanges();

createMovieList(movieDB.movies, ref.interactiveList);
