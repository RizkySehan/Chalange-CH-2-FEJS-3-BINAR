function getAngkaTerbesarKedua(dataNumbers) {
  if (!Array.isArray(dataNumbers) || dataNumbers.length < 2) {
    return "Input tidak valid";
  }

  dataNumbers.sort(function (a, b) {
    return b - a;
  });
  return dataNumbers[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
