const angka = [-1, -2, 3, 4, 6, 7, 9, 30, 5];
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// // filter
// const newAngka = angka.filter(function(a){
//   return a >= 5;
// })
// console.log(newAngka)

// // // filter menggunakan arrow function
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// // // map
// const newAngka = angka.map(a => a + 2);
// console.log(newAngka);
// // tidak merubah array angka
// console.log(angka)

// reduce
// -1 + -2 + 3 + 4 + 6 + 7 + 9 + 30 + 5
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
console.log(newAngka);
