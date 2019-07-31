//Mi primera linea de codigo js
console.log("Hello World!")

//Calcular cuantos dias he vivido aproximadamente
console.log("Days lived:" + 365 * 21 )


//Variables
var livingDays = 365
var age = 21

console.log("Days lived:" + livingDays * age)

//Tenemos una USB de 4GB cuantas fotos de 3MB le caben
var fourGB = 4096
var photoWeight = 3
var totalFoto = Math.round(fourGB/photoWeight)

console.log("In 4GB they are stored " + totalFoto + " photos, weighing 3MB")


/*
Tenemos 22 cubiculos, en cada cubiculo podemos meter 3 carros
y 2 camionetas
*Cuantos cubiculos, llenamos completos
*Cuantas camionetas sobran 
*Cuantos carros sobran
camionetas = 57
carros = 130
*/
var parkingSpace = 22
var cars = 130
var suvs = 57
var totalParkingCars = parkingSpace * 3
var totalParkingSuvs = parkingSpace * 2
console.log(
  'Full house ?', (
    (totalParkingCars < cars) && (totalParkingSuvs < suvs)
  )
)
console.log(totalParkingCars - cars)
console.log(totalParkingSuvs - suvs)

/*
carros dentro = 66
camionetas dentro = 44

carros sobrantes = 64
camionetas sobrantes = 13
*/
