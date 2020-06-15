// chiedere il NOME
var nome;
nome = prompt('Inserisci il tuo nome');


// chiedere il COGNOME
var cognome;
cognome = prompt('Inserisci il tuo cognome');

// chiedere il COLORE PREFERITO
var colorePreferito;
colorePreferito = prompt('Inserisci il tuo colore preferito');

// OUTPUT per l'utente
var password = nome + cognome + colorePreferito + '19';
document.getElementById('my-text-pwd').innerHTML = 'Your password:';
document.getElementById('my-text').innerHTML = password;
