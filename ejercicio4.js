const empleados = [
    { nombre: 'Laura', salario: 35000 },
    { nombre: 'Pedro', salario: 40000 },
    { nombre: 'Ana', salario: 28000 }
    ];

const empleados_filrados = empleados.filter(empleado => empleado.salario>30000);

const empleados_salario_anual = empleados_filrados.map(empleado => ({
    nombre: empleado.nombre,
    salario_anual: empleado.salario * 12
}));

console.log(empleados_salario_anual);