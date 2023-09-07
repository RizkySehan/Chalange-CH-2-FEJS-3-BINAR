let checkTypeNumber = (givenNumber) => {
  if (isNaN(givenNumber) && givenNumber !== undefined) {
    return "Error: Invalid data type";
  } else if (givenNumber === undefined) {
    return "Error: Bro where is the parameter?";
  } else {
    if (givenNumber % 2 === 0) {
      return "GENAP";
    } else {
      return "GANJIL";
    }
  }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
