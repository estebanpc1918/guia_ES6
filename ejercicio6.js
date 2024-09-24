function IsAmstrong(numeros){

    const digitos = String(numeros).split('');
    const numdigital = digitos.length;

    const sum = digitos.reduce((acc,digital) => acc + Math.pow(Number(digital), numdigital),0);
    return sum === numeros;

}
console.log(IsAmstrong(153));
