// -------------check email------------

// // chiedo l'email all'utente
// var emailUtente = prompt("Inserisci la tua email");
//
// // le mia lista di email
// var emailRegistrate = ['andrea@gmail.com', 'marco@gmail.com', 'sara@gmail.com', 'giulia@gmail.com'];
//
// var emailVerificata = false;
//
// // Cerco se l'email inserita è presente nella lista
// for (var i = 0; i < emailRegistrate.length; i++) {
//
//     if (emailRegistrate[i] == emailUtente) {
//         var emailVerificata=true;
//     }
// }
//
// if (emailVerificata == true) {
//     console.log("la tua email è presente");
// } else  {
//     console.log("la tua email non è verificata");
// }


// --------lancio dadi----------

// lancio il dado 1
var lancioUno = Math.floor(Math.random() * 6) + 1;
console.log("Giocatore Uno il tuo punteggio è " + lancioUno);

// lancio il dado 2
var lancioDue = Math.floor(Math.random() * 6) + 1;
console.log("Giocatore Due il tuo punteggio è " + lancioDue);

if (lancioUno > lancioDue) {
    console.log("Giocatore Uno hai vinto!");
} else if (lancioUno < lancioDue) {
    console.log("Giocatore Due hai vinto!");
} else if (lancioUno == lancioDue) {
    console.log("Avete pareggiato, nessuno dei due vince");
}
