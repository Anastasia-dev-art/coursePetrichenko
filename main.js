 

let numberOfFilm = +prompt ( "Сколько фильмов вы уже посмотрели?", " ")



personalMovieDB = {
    count: numberOfFilm,
    movies : { },
    actors: { },
    genres:  [ ],
    privat: false
}

// let a = prompt("Один из последних фильмов, который вы посмотрели", " ");
// let b = prompt('Оценка фильму', " ");
// let c = prompt("Один из последних фильмов, который вы посмотрели", " ");
// let d = prompt('Оценка фильму', " ")

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c]= d
console.log(personalMovieDB);

for ( let i = 0; i < 2; i++ ) {
    let a = prompt("Один из последних фильмов, который вы посмотрели", " ");
    let b = prompt('Оценка фильму', " ");

    if ( a != null  &&  b != null && a != " " && b != " " && a.length < 50 && b.length < 50 ) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log("error")
        i--; //возвращаемся назад
    }
    
}r3




if ( personalMovieDB.count <= 10 ) {
    console.log('Вы просмотрели уже довольно много фильмов');
} else if ( personalMovieDB.count >  10 && personalMovieDB.count < 30 ) {
    console.log('Вы хороший зритель');
} else if (  personalMovieDB.count >  30 ) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка')
}

