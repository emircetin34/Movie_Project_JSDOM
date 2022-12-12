function Storage() {

}



// Prototype-1 (Storage)
Storage.prototype.addFilmToStorage = function(newFilm){
    // console.log(newFilm);
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));
}


// Prototype-2 (Storage)
Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if (localStorage.getItem("films") === null){
        films=[];
    }

    else {
        films = JSON.parse(localStorage.getItem("films")); //Json.parse ile arraye çevirdik.
    }

    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    //splice
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));

}


Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}