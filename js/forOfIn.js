// for..of
// const mhs = ["idham", "farrel", "ujang"];

// pakai for
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// pakai forEach / forEach hanya bisa untuk array
// mhs.forEach((e) => console.log(e));

// // pakai for of
// for(const e of mhs) {
//   console.log(e);
// }

// // string
// const nama = 'idham';
// for (const n of nama) {
//   console.log(n);
// }
// const mhs = ["idham", "farrel", "ujang"];

// // mhs.forEach((n, i) => console.log(`${n} adalah mahasiswa ke-${i+1}`));

// for (const [i, n] of mhs.entries()) {
//   console.log(`${n} adalah mahasiswa ke-${i+1}`);
// }

// Nodelist
// const liNama = document.querySelectorAll(".nama");

// pakai forEach
// liNama.forEach((e) => console.log(e.innerHTML));

// pakai for
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// arguments

// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (const a of arguments) {
//     jumlah += a
//   }
//   return jumlah
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for in / properti untuk object
const mhs = {
  nama:'idham hazard',
  umur:`16 tahun`,
  jurusan:`TKJ`,
  email: 'idham@gmail.com'
}
for (m in mhs) {
  console.log(mhs[m]);
}