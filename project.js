const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

//UI Objesini Başlatalım
const ui = new UI();

//Tüm eventleri yükleme 
addEventListeners()
function addEventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}


// Storage Objesi Üretme
const storage = new Storage();


function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        // HATA EKLENECEK
        ui.displayMessage("Tüm Alanları doldurun","danger");
     }

    else {
        // Yeni Film
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm)// Arayüze film ekleme
        ui.displayMessage("Film başarıyla eklendi","success");
        storage.addFilmToStorage(newFilm); // Storage'ye film ekleme.
    }
    ui.clearInputs(titleElement,directorElement,urlElement); // Her film ekledikten sonra ınputlar temizlenir.


    e.preventDefault();

}

function deleteFilm(e){
    if (e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Silme İşlemi Başaralı","success");
    }

}


function clearAllFilms(){
    if (confirm("Tüm Filmleri Silmek İsteğinize Emin misin ?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
    

}