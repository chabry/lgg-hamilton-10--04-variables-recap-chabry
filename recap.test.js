//recapt.test.js

//On extrait les méthodes du fichier recap.js
const {
    calculate,
    concatenatePhrases,
    calculatePriceWithVAT,
    calculateCircleSurface,
    timeToSeconds,
} = require('./recap');

//Donner une description aux tests
describe('Recap', () => {
    //Création du premier test pour la fonction somme, division modulo
    test('should calculate sum, division and modulo of given numbers', () => {
        // Déclaration des variables
        const number1 = 8
        const number2 = 4
      
        // Effectuer les calculs
        const { sum, division, modulo } = calculate(number1, number2)
      
        // Vérifier les résultats
        expect(sum).toBe(12) // 8 + 4
        expect(division).toBe(2) // 8 / 4
        expect(modulo).toBe(0) // 8 % 4
      })
    test('should concatenate 2 phrases together', () => {
        // Déclaration des 2 phrases
        const phrase1 = 'ZOULOU'
        const phrase2 = 'TCHANG'

        // concatener les phrses

        const result = concatenatePhrases(phrase1,phrase2)

        expect(result).toBe('ZOULOU TCHANG')
    })
    test('should return a price with VAT include', () => {
        //Déclaration des variables
        const priceWithoutVAT = 50
        const VAT = 21

        //Appliquer la VAT
        const result = calculatePriceWithVAT(priceWithoutVAT, VAT)

        expect(result).toBe(60.5)
    })
    test('calulate the surface of a circle', () => {
        
        const radius = 5

        const result = calculateCircleSurface(radius)

        expect(result).toBe(79)
    })
    test('Convert time between now and midnight in seconds', () => {
        const result = timeToSeconds()

        const now = new Date();
        const expectedSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        expect(result).toBe(expectedSeconds)
    })

})

