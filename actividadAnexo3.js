// Función rotString para rotar letras en el alfabeto
const rotString = (str, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    return str.split('').map(char => {
      const isUpperCase = char === char.toUpperCase();
      const lowerChar = char.toLowerCase();
  
      if (alphabet.includes(lowerChar)) {
        let newIndex = (alphabet.indexOf(lowerChar) + shift) % 26;
        if (newIndex < 0) newIndex += 26;  // Para rotaciones negativas
  
        const newChar = alphabet[newIndex];
        return isUpperCase ? newChar.toUpperCase() : newChar;
      }
      return char;  // Si no es una letra, la retorna sin cambios
    }).join('');
  };
  
  // Ejemplos de uso
  console.log(rotString('abc', 3));  // cde
  console.log(rotString('xyz', 3));  // abc
  console.log(rotString('Hello, World!', -1));  // Gdkkn, Vnqkc!
  