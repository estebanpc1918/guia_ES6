const personas = [

    { nombre: 'Juan', apellido: 'Pérez', edad: 28 },
    { nombre: 'María', apellido: 'García', edad: 22 },
    { nombre: 'Luis', apellido: 'Fernández', edad: 35 }
    ];

const personas_nombre_completos = personas.map(({nombre, apellido, edad}) => ({nombres_completos:`${nombre} ${apellido}`,edad}));

console.log(personas_nombre_completos)