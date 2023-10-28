// const angka = ["satu", "dua", "tiga"];
// const perkenalan = ["Halo", "nama", "saya", "idham hazard"];

// sebelum pakai Destructuring Assignment
// const angka1 = angka[2]
// console.log(angka1);

// pakai Destructuring Assignment
// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam);

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);

// swap items
// let a = 10;
// let b = 20;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// // return value pada function
// function coba() {
//   return [1, 2, 3];
// }
// const [a, b, c] = coba();
// console.log(c);

// // rest parameter
// const [a, ...sisa] = [1, 2, 3, 4, 5, 6];
// console.log(sisa[4]);

// Destructuring Object / kalo object harus sesuai propertinya
// const mhs = {
//   nama: "idham hazard",
//   umur: `16 tahun`,
// };

// const { nama, umur } = mhs;
// console.log(umur);

// Assigment tanpa deklarasi object
// ({ nama, umur, jurusan } = { nama: "idham hazard", umur: `16 tahun`, jurusan:'TKJ' });
// console.log(jurusan);

// Assigment ke variabel baru

// const mhs = {
//   nama: "idham hazard",
//   umur: `16 tahun`,
// };

// ({ nama: n, umur: u } = {
//   nama: "idham hazard",
//   umur: `16 tahun`,
// });
// console.log(n);

// memberikan default value
// const mhs = {
//   nama: "idham hazarad",
//   umur: `16 tahun`,
//   jurusan: "TKJ",
// };
// const { nama, umur, jurusan = "tidak ada" } = mhs;
// console.log(jurusan);

// mengambil field pada object, setelah dikirim parameter untuk function
const mhs = {
  nama: 'idham hazard',
  umur: `16 tahun`
}

function getUmur ({umur}) {
  return umur
}
console.log(getUmur(mhs));

