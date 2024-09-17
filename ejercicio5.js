const personas = [
    { nombre: 'Daniel', edad: 30 },
    { nombre: 'Sofía', edad: 22 },
    { nombre: 'Miguel', edad: 30 },
    { nombre: 'Laura', edad: 22 }
    ];

const agrup_edad = personas.reduce((acumula,persona) => {
    const{nombre,edad}= persona;
    
    if(!acumula[edad]){
        acumula[edad]= []
    }
    acumula[edad].push(nombre);
    return acumula
},{})

console.log(agrup_edad)