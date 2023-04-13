"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", "");
  const b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    i--;
    console.log("error");
  }
}

console.log(personalMovieDB);

if (numberOfFilms < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
  console.log("Вы классный зритель");
} else if (numberOfFilms > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
