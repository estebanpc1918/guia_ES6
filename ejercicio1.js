const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 } 
];

const nombres_en_mayus = personas.map(persona => persona.nombre.toUpperCase());

console.log(nombres_en_mayus)