var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function(){
    // Dettagli passeggero
    var passengerName = document.getElementById("fullname").value;
    var distance = document.getElementById("distance").value;
    var age = document.getElementById("age").value;
    

    var passengerNameElem = document.getElementById("passengerName");
    passengerNameElem.innerHTML = passengerName;

    var discountElem = document.getElementById("discount");
    if (age === "Underage") {
        discountElem.innerHTML = "Underage discount";
    } else if (age === "Over 65"){ 
        discountElem.innerHTML = "Over-65 discount";
    } else {
        discountElem.innerHTML = "No discount";
    }
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    // Numero carrozza
    var carriageElem = document.getElementById("carriage")
    var trainCarriage = getRandomNumber(1,15)
    carriageElem.innerHTML = trainCarriage
    
    // Codice treno (numero casuale tra 90000 e 100000 escluso)
    var trainCodeElem = document.getElementById("trainCode")
    var trainCode = getRandomNumber(90000,100000)
    trainCodeElem.innerHTML = trainCode
    
    // Prezzo calcolato
    var ticketPriceElem = document.getElementById('ticketPrice');
    var ticketPrice = distance * 0.21;

    if (age === "Underage"){
        ticketPrice = ticketPrice * 0.8;
    } else if (age === "Over 65") {
        ticketPrice = ticketPrice * 0.6;
    }

    ticketPriceElem.innerHTML = ticketPrice.toFixed(2) + '€';
});

var cancelButton = document.getElementById('cancel');

cancelButton.addEventListener('click', function() {
    document.getElementById('fullName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('distance').value = '';
})













// Categoria selezionata dall'utente