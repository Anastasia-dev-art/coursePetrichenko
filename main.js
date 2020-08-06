 

let numberOfFilm = +prompt ( "Сколько фильмов вы уже посмотрели?", " ")



personalMovieDB = {
    count: numberOfFilm,
    movies : { },
    actors: { },
    genres:  [ ],
    privat: false
}

let a = prompt("Один из последних фильмов, который вы посмотрели", " ");
let b = prompt('Оценка фильму', " ");
let c = prompt("Один из последних фильмов, который вы посмотрели", " ");
let d = prompt('Оценка фильму', " ")

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c]= d

console.log(personalMovieDB);