const personas = [
    { nombre: 'Daniel', edad: 30 },
    { nombre: 'Sofía', edad: 22 },
    { nombre: 'Miguel', edad: 30 },
    { nombre: 'Laura', edad: 22 }
    ];

const agrup_edad = personas.reduce((acumulador,persona) => {
    const{nombre,edad}= persona;
    
    if(!acumulador[edad]){
        acumulador[edad]= []
    }
    acumulador[edad].push(nombre);
    return acumulador
},{})

console.log(agrup_edad)