const prompt = require("prompt-sync")();
function checkNumber(){
    var number = prompt("enter a number: ")

    if (number < 0){
        console.log("Tidak bisa input bilangan negatif" );
        checkNumber();
    }
    else if (number % 2 != 0){
        console.log("Tidak bisa input bilangan ganjil");
        checkNumber();
    }
    else{
        let betul = Math.sqrt(number)
        console.log(`Akar dari ${number} adalah ${betul}`)
    }
}
checkNumber();