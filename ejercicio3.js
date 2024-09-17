const nombres = ['Ana', 'Juan', 'Ana', 'Pedro', 'Juan', 'Ana'];

const conteo_nombres = nombres.reduce((acumula, nombre) =>{
    acumula[nombre] = (acumula[nombre] || 0) + 1;
    return acumula
}, {} )

console.log(conteo_nombres)