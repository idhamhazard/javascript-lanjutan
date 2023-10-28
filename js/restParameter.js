// rest parameter
// function angka(a, ...sisa) {
//   return `a = ${a}, sisanya adalah ${sisa}`;
// }
// console.log(angka(1, 2, 3, 4, 5));

// // latihan
// function jumlahkan(...angka) {
//   // pakai for of
//   // let jumlah = 0;
//   // for (const a of angka) {
//   //   jumlah += a;
//   // }
//   // return jumlah;

//   // pakai reduce
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok = ["idham", "farel", "radit", "rara", "dean"];
// const [ketua, wakil, ...anggota] = kelompok
// console.log(anggota);

// object destructuring
// const tim = {
//   ui: 'rara',
//   fe1: 'idham',
//   fe2: 'radit',
//   be: 'farrel'
// }
// const {ui, ...myTeam} = tim
// console.log(myTeam);

// filtering
function filterBy (type, ...value) {
  return value.filter(v => typeof v === type)
}
console.log(filterBy('boolean', 1, 5, false, "ujang"));
