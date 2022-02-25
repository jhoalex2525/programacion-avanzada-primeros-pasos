function distanciaPlanetas(){
    planeta1CX = prompt("Ingrese coordenada X planeta 1:")
    planeta1CY = prompt("Ingrese coordenada Y planeta 1:")
    planeta2CX = prompt("Ingrese coordenada X planeta 2:")
    planeta2CY = prompt("Ingrese coordenada Y planeta 2:")    
    distancia = Math.sqrt(Math.pow((planeta2CX-planeta1CX),2)+Math.pow((planeta2CY-planeta1CY),2))
}

distanciaPlanetas();