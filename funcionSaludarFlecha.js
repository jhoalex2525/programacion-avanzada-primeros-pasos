//  funcion tradicional
function saludarTradicional(nombrePersona){
    return ("Buenos días "+nombrePersona)
}

console.log(saludarTradicional("Jhony"))

// funcion de flecha, si solo hay un parametro, s epueden quitar lso parentesis del parametro
// y si ocupa el codigo una sola linea se puede quitar el return, quedaria:
// let saludar = nombrePersona => "Buenos días "+nombrePersona
// console.log(saludar("Juan")) 

let saludar = (nombrePersona) => {
    return ("Buenos días "+nombrePersona)
}

console.log(saludar("Juan"))

