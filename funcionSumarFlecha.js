// funcion tradicional sumar
function sumarTradicional(num1,num2){
    sum=num1+num2
    return(`La suma de ${num1} y ${num2} es ${sum}`)
}

console.log(sumarTradicional(5,6))

// funcion flecha sumar
let sumar=(num1,num2) => {
    sum=num1+num2
    return(`La suma de ${num1} y ${num2} es ${sum}`)
}

console.log(sumar(8,6))

let sumarCorta=(num1,num2) => "La suma de "+ num1+ " y "+ num2+ " es "+ (num1+num2)
console.log(sumarCorta(10,15))