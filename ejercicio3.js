const nombres = ['Ana', 'Juan', 'Ana', 'Pedro', 'Juan', 'Ana'];

const conteo_nombres = nombres.reduce((acumulador, nombre) =>{
    acumulador[nombre] = (acumulador[nombre] || 0) + 1;
    return acumulador
}, {} )

console.log(conteo_nombres)