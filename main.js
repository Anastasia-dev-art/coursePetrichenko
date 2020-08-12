 
let numberOfFilm;

function start(){
     numberOfFilm = +prompt ( "Сколько фильмов вы уже посмотрели?", " ")


     while (numberOfFilm == " " || numberOfFilm == null || isNaN(numberOfFilm) ) {
        numberOfFilm = +prompt ( "Сколько фильмов вы уже посмотрели?", " ")
     }
 }//пока нет ответа на вопрос, он повторяется


 start() 


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


function rememberMyFilms() {
    for ( let i = 0; i < 2; i++ ) {
        let a = prompt("Один из последних фильмов, который вы посмотрели", " ");
        let b = prompt('Оценка фильму', " ");
    
        if ( a != null  &&  b != null && a != " " && b != " " && a.length < 50 && b.length < 50 ) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log("error")
            i--; //возвращаемся назад
        }
    }
}
// rememberMyFilms() 


function detectPersonalLevel() {
    if ( personalMovieDB.count <= 10 ) {
        console.log('Вы просмотрели уже довольно много фильмов');
    } else if ( personalMovieDB.count >  10 && personalMovieDB.count < 30 ) {
        console.log('Вы хороший зритель');
    } else if (  personalMovieDB.count >  30 ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка')
    }
}

detectPersonalLevel() 



function showMyDB (hidden) {
    if ( !hidden ){
       console.log(personalMovieDB)
  } else{
      console.log('no')
  }
}

showMyDB ()





function writeYourGenres () {

 for ( let i = 1; i <=3 ; i++) {
     const genre =  prompt(`Ваш любимый жанр номер ${i} ?`)
     personalMovieDB.genres[i - 1] = genre;//вычитаем 1 потому что исчисление с 0
 }
}

writeYourGenres()
