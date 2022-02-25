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

// 1.2 filtrado mayor que 20 en flecha
let filtrado2 = personas.filter(persona=>persona.edad>20)
console.log(filtrado2)

// array method
// 2. mapeo regresa un arreglo nuevo con las modificaciones
let mapeado = personas.map(function(persona){
    return ("ingenier@ "+persona.nombre)
})
console.log(mapeado)

// 2.1 mapeo regresa un arreglo nuevo con las modificaciones, en flecha
let mapeado1 = personas.map(persona=>"ingenier@ "+ persona.nombre)
console.log(mapeado1)

// array method
// 3. foreach no retorna por tanto no se guarda en una variable. Significa: Para cada uno de los elementos
personas.forEach(function(persona){
    persona.nombre = "nn"
})
console.log(personas)
// 3.1 foreach no retorna por tanto no se guarda en una variable. Significa: Para cada uno de los elementos. Flecha
personas.forEach(persona=>persona.nombre = "AA")
console.log(personas)