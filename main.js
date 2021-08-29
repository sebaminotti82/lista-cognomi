/*
parte 1 crea un array di cognomi (che sara' il nostro database )
parte 2 chiedi all'utente il suo cognome con un prompt  
parte 3 inserisci il cognome nell'array
parte 4 se gia presente invia un alert
parte 5 stampa la lista a schermo
parte 6 stampa la lista ordinata alfabeticamente
parte 7 stampa la posizione del tuo cognome nella lista 
*/


// parte 1 creiamo una lista di cognomi 
var listaCognomi = ['vercesi','curcio','barbarini']
console.log(listaCognomi);
//parte due  : utilizzo un ciclo do while per verificare che il prompt non sia vuoto e che contenga minimo 4 caratteri

do {
    var cognome = prompt('inserisci cognome')
} while ((cognome=='')||(cognome.length < 4));
console.log(cognome);

// parte 3 e 4
// inserisco il cognome nell'array cognomi e se gia presente invio un alert

if((!listaCognomi.includes(cognome))){
    listaCognomi.push(cognome)
    console.log(listaCognomi);;
} else {
    alert('cognome gia presente')
}

//tramite ciclo while stampiamo a schermo la lista non ordinata alfabeticamente

var i = 0
while (i < listaCognomi.length) {
    document.getElementById('listaNonOrdinata').innerHTML += '<li>'+listaCognomi[i]+'</li>'
    i++
}

var posizioneNonOrdinata = listaCognomi.indexOf(cognome)
document.getElementById('posizioneNonOrdinata').innerHTML= 'la posizione del cognome utente non ordinata alfabeticamente  è:'+" "+posizioneNonOrdinata + " "+'e il cognome è :'+" " + cognome

var listaOrdinata = listaCognomi.sort() //utilizzo il metodo sort() per ordinare la mia lista alfabeticamente

var i = 0
while (i < listaOrdinata.length) {
    document.getElementById('listaOrdinata').innerHTML += '<li>'+listaOrdinata[i]+'</li>'
    i++
}
var posizioneUtente = listaOrdinata.indexOf(cognome) //con il metodo indexOf trovo il mio elemento preciso da estrapolare
document.getElementById('posizione').innerHTML= 'la posizione umana del cognome utente è:'+" "+  ++posizioneUtente + " "+'e il cognome è :'+" " + cognome
/*utilizzo il ++ per incrementare di uno la posizione (umana ) poiche' gli array cominciano a contare da 0 cosi facendo il mio array 
mi restituirà la posizione del cognome utente partendo da 1 !! esempio  ansaldi posizione normale = 0 posizione umana 1


*/