// chiedo l'email all'utente
var emailUtente = prompt("Inserisci la tua email")

// le mia lista di email
var emailRegistrate = ['andrea@gmail.com', 'marco@gmail.com', 'sara@gmail.com', 'giulia@gmail.com']

// console.log(emailRegistrate);

// Cerco se l'email inserita è presente nella lista
for (var i = 0; i < emailRegistrate.length; i++) {

    if (emailRegistrate[i] !== emailUtente) {
        console.log("la tua email Non è presente nella nostra lista");
    } else {
        console.log("la tua email è presente nella nostra lista");
    }
}
