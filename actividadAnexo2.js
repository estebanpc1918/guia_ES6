const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CopyPairs = (arr) => {
    
    const pares = arr.filter(num => num % 2 === 0);
    return pares;
}

const paresResultado = CopyPairs(numeros);

paresResultado.forEach(par => console.log(par));