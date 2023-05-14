const array1 = [ 12, 13, 14, 15];

console.log(array1.fill(22, 2, 4));
//Expected output: Array[12, 13, 22, 22]

console.log(array1.fill(22, 1));
//Expected output: Array [12, 22, 22, 22]

console.log(array1.fill(22));
//Expected output: Array [22, 22, 22, 22]