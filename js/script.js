'use strict';

//funzione che genra numeri casualmente
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};


// un ciclo for che fa genera 5 numeri random con l'utilizzo della funzione randomNum ed esegue tutto il programmino

for ( let i=1; i<=5; i++){
    let random_number =randomNum(1, 100);
    let numerBox = document.querySelector('.display');
    numerBox.innerHTML += `<div class="margin mt-5"><h1 class="center">${random_number }</h1></div>`;
    let remembered = document.querySelector('.risultati');
    //timer che fa sparire i numeri
    setTimeout(function() {
        numerBox.remove();
    }, 30020);

    //escuzione prompt 
    setTimeout(function () {
        let userPromt;
        do{
            userPromt = parseInt( prompt('Inserisci i numeri apparsi prima'));
        }
        while (isNaN(userPromt));
        console.log(userPromt);

        if(random_number == userPromt){
            remembered.innerHTML += `                    
            <div class="result-margin p-4">
                <p class=""> Il numero: ${random_number} è corretto</p> 
            </div>`;
        }
        else{
            remembered.innerHTML += `
            <div class="result-margin p-4">
                <p class=""> Hai inserito: ${userPromt}.</p> 
                <p class=""> Invece di: ${random_number}</p>
            </div>
            `;
        }

    }, 30020);

};