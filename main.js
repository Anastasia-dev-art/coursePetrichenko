 
personalMovieDB = {
    count: 0,
    movies : { },
    actors: { },
    genres:  [ ],
    privat: false,
    start: () =>{
        personalMovieDB.count = +prompt ( "Сколько фильмов вы уже посмотрели?", " ")
        while (personalMovieDB.count == " " || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt ( "Сколько фильмов вы уже посмотрели?", " ")
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
    detectPersonalLevel:()=>{
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
        for ( let i = 1; i <2 ; i++) {
            const genres =  prompt(`Перечислите ваши любимые жанры через запятую`)
            if ( genres == ""  || null ) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ")
            }
            personalMovieDB.genres.forEach(( item, i ) =>{
                document.write(`Любимый жанр номер ${i+1} - это ${item } <br>`) 
            })
        
           
        }
    },
    toggleVisibleMyDB: ( )=>{
       if (  personalMovieDB.privat == false ) {
        personalMovieDB.privat = true
       } else {
        personalMovieDB.privat = false
       }
    }
}


