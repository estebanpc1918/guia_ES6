
const CopyPairs = (arr) => {
    return arr.map(num => (num % 2 === 0 ? num : null)).filter(num => num !== null);
  };
  

  console.log(CopyPairs([2, 3, 5, 12, 31])); 
  console.log(CopyPairs([10, 18, 191, 13, 248])); 
  
