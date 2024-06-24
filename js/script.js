let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let color = prompt("Inserisci il tuo colore preferito");

let password = name + surname + color + "23";

document.getElementById("password").innerText += " " + password;
