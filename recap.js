/**
 * I - calculate

    Write an algorithm which calculates:

    - the **sum** of two chosen number

    - the **division** of two chosen number

    - the [**modulo**](https://en.wikipedia.org/wiki/Modulo_operation) of
    two inputed numbers
**/

const number1 = 8
const number2 = 4 

function calculate(number1, number2) {
    const sum = number1 + number2;
    const division = number1 / number2;
    const modulo = number1 % number2;
    return { sum, division, modulo };
}


/**
    ### II - concatenate sentence

    Write an algorithm which
    [**concatenates**](https://en.wikipedia.org/wiki/Concatenation) two
    phrases together.
 */
    
function concatenatePhrases(phrase1, phrase2) {
    return phrase1 + ' ' + phrase2;
}


/**
 * ### III - VAT

    Write an algorithm which receives a **price without VAT** and returns
    the **price with VAT** with a **rate of 21%**.
 */

function calculatePriceWithVAT(priceWithoutVAT, vatPercentage) {
    return priceWithoutVAT + (priceWithoutVAT * (vatPercentage / 100));
}

/**
 * ### IV - surface of a circle

    Write an algorithm which receives the **radius of a circle** and
    calculate its **surface**.  
 */

function calculateCircleSurface(radius) {
    return Math.ceil(Math.PI * Math.pow(radius, 2));
}

/**
 * ### V - conversion of time to seconds

    Write an algorithm which receives the **time of day** in three different
    numbers, the hour, the minutes and the seconds and returns the **number
    of seconds** since midnight.
 */

function timeToSeconds() {
    const now = new Date(); // Crée une nouvelle instance de Date pour obtenir l'heure actuelle

    const hour = now.getHours();    // Récupère l'heure actuelle
    const minute = now.getMinutes(); // Récupère les minutes actuelles
    const second = now.getSeconds(); // Récupère les secondes actuelles

    const hourInSecond = hour * 3600;   // Convertir les heures en secondes
    const minuteInSecond = minute * 60; // Convertir les minutes en secondes

    return hourInSecond + minuteInSecond + second; // Retourne le total des secondes écoulées depuis minuit
}

module.exports = { calculate, concatenatePhrases, calculatePriceWithVAT, calculateCircleSurface, timeToSeconds };