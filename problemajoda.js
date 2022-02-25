// Función tradicional
function distanciaPlanetas(x1,y1,x2,y2){    
    let distancia = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)).toFixed(2)
    console.log(`La distancia entre los planetas es ${distancia}`)
}

distanciaPlanetas(0,0,-10,-10);

// Función flecha
let distanciaPlanetasFlecha = (x1,y1,x2,y2) => "La distancia entre los planetas es "+ Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)).toFixed(2)
console.log(distanciaPlanetasFlecha(0,0,-10,-10))

