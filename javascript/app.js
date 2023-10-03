//document.writeln('hello world')

//# Password Generator

//## Chiedere all' utente il nome
    //- dichiarare una variabile per il nome utente
    let firstName
    //- assegnare alla variabile il valore restituito da un prompt sulla pagina
    firstName = prompt('Ciao! Dimmi il tuo nome...')
    console.log(firstName)
//## Chiedere all' utente il cognome
    //- dichiarare una variabile per il cognome dell' utente
    let lastName
    //- assegnare alla variabile il valore restituito da un prompt sulla pagina
    lastName = prompt('E adesso il tuo cognome...')
    console.log(lastName)
//## Chiedere all' utente il colore preferito
    //- dichiarare una variabile per il colore preferito dell' utente
    let preferredColour
    //- assegnare alla variabile il valore restituito da un prompt sulla pagina
    preferredColour = prompt('Dimmi il tuo colore preferito...')
    console.log(preferredColour)
//## Genera randomicamente un numero 
    //### Bonus
       // - Generare randomicamente un numero
       let genNumber
       genNumber = Math.floor((Math.random() * 100) + 1)
       console.log(genNumber) 
       // -trasformare il valore numerico in una stringa
       let stringNumber
        stringNumber = genNumber.toString
        console.log(stringNumber)
//## Concatenare nome , cognome, colore e numero
    //- dichiarare una variabile "new password " dove concatenare le varie stringhe 
//## Stampare il risultato sulla pagina
    //- richiamare con javascript l'elemento del dom con id = password
    //- modificare l' innerHTML dell' elemento con id = password con il valore della variabile " new password "