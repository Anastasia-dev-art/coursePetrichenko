
personalMovieDB = {
    count: 0,
    movies : { },
    actors: { },
    genres:  [ ],
    privat: false,
    start: () =>{
        personalMovieDB.count = +prompt ( "Сколько фильмов вы уже посмотрели?", " ")
        while (personalMovieDB.coun == " " || personalMovieDB.coun == null || isNaN(personalMovieDB.coun) ) {
            personalMovieDB.coun = +prompt ( "Сколько фильмов вы уже посмотрели?", " ")
        }
    },
    rememberMyFilms: () =>{
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
    },
    detectPersonalLevel:() =>{
        if ( personalMovieDB.count <= 10 ) {
            console.log('Вы просмотрели уже довольно много фильмов');
        } else if ( personalMovieDB.count >  10 && personalMovieDB.count < 30 ) {
            console.log('Вы хороший зритель');
        } else if (  personalMovieDB.count >  30 ) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка')
        }
    },
    showMyDB: ( hidden ) =>{
        if ( !hidden ){
            console.log(personalMovieDB)
       } else{
           console.log('no')
       }
    },
    writeYourGenres: () =>{
        for ( let i = 1; i <=3 ; i++) {
            const genre =  prompt(`Ваш любимый жанр номер ${i} ?`)
            personalMovieDB.genres[i - 1] = genre;//вычитаем 1 потому что исчисление с 0
        }
    }

}

