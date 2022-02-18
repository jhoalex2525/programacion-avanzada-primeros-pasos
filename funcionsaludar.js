// funcion para saludar cualquier persona
function saludar(nombrePersona){
    console.log("Buenos días "+nombrePersona)
}

saludar("Jhony")
saludar("Cris")

nombrePersona="Juan"

saludar(nombrePersona)

// AL no poner console.log no permite que la función vea por tanto no retorna nada
function saludarError(nombrePersona){
    return ("Buenos días "+nombrePersona)
}

saludarError("Error")

// Para reperar esto por ejemplo s epondría el consolelog aca abajo

console.log(saludarError("Error"))
