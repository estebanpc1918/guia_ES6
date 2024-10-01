const inventario = [
    { nombre: 'Máquina A', valor: 1200, activa: true },
    { nombre: 'Máquina B', valor: 950, activa: false },
    { nombre: 'Máquina C', valor: 500, activa: true },
    { nombre: 'Máquina D', valor: 1600, activa: true }
  ];

const valorTotal = inventario
  .filter(maquina => maquina.activa) 
  .reduce((total, maquina) => total + maquina.valor, 0); 
console.log(`El valor total de las máquinas activas es: ${valorTotal}`);