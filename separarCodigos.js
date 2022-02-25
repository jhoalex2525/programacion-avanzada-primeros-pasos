// funcion separar codigo forma tradicional
function separarCodigoTradicional(codigo){
    nombre= codigo.split(":")
    return(`el nombre es ${nombre[1]}`)
}

console.log(separarCodigoTradicional("ARQ2045:Juan"))

// funcion separar codigo forma flecha
let separarCodigo=codigo => "El nombre es "+codigo.split(":")[1]
console.log(separarCodigo("ARQ2045:Jhony"))