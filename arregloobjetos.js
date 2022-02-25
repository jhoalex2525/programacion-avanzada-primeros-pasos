// tradicional
// let personas = Array(1,2,3,4,5)

// arreglo objeto
let personas = [
    {nombre: "jhony", edad: 32},
    {nombre: "cristian", edad: 25},
    {nombre: "rosa", edad: 63},
    {nombre: "maria", edad: 20},
    {nombre: "laura", edad: 35}
]

// array method
// 1. filtrado menor que 30
let filtrado = personas.filter(function(persona){
    return (persona.edad<30)
})
console.log(filtrado)

// 1.1 filtrado mayor que 20
let filtrado1 = personas.filter(function(persona){
    return (persona.edad>20)
})
console.log(filtrado1)

// 1.1 filtrado mayor que 20 en flecha
let filtrado2 = personas.filter(persona=>persona.edad>20)
console.log(filtrado2)