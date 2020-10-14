// chiedo l'email all'utente
var emailUtente = prompt("Inserisci la tua email");

// le mia lista di email
var emailRegistrate = ['andrea@gmail.com', 'marco@gmail.com', 'sara@gmail.com', 'giulia@gmail.com'];

var emailVerificata = false;

// Cerco se l'email inserita è presente nella lista
for (var i = 0; i < emailRegistrate.length; i++) {

    if (emailRegistrate[i] == emailUtente) {
        var emailVerificata=true;
    }
}

if (emailVerificata == true) {
    console.log("la tua email è presente");
} else  {
    console.log("la tua email non è verificata");
}
