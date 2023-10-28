// Function Expression
// let mahasiswa = function (nama) {
//   return `halo ${nama}, selamat datang!!!`
// }
// console.log(mahasiswa('idham hazard'))

// Function Arrow
let selamat = (jam, nama) => {
  return `selamat ${jam} ${nama}, selamat belajar!!!`;
};
console.log(selamat("siang", "idham"));

// Implisit Return
let mahasiswa = (nama) => `halo ${nama}, selamat datang!!!`;
console.log(mahasiswa("idham khalid"));

// Tanpa Parameter
let hello = () => `Hello World`;
console.log(hello());

// Latihan
let benda = ["meja", "lemari", "kursi"];
let jumlahBenda = benda.map(function (nama) {
  return nama.length;
});
console.log(jumlahBenda);

// Latihan Menggunakan Arrow Function
let siswa = ["idham hazard", "ojak", "imelda"];
let jumlahSiswa = siswa.map((nama) => nama.length);
console.log(jumlahSiswa);

// Latihan Menggunakan Arrow Function dengan objek
let minuman = ["granita", "teh gelas", "energen"];
let jumlahMinuman = minuman.map((nama) => ({ nama: nama, jumlahMinuman: nama.length }));
console.table(jumlahMinuman);

// Constructor Function
function NamaSiswa (nama, umur) {
  this.nama = nama;
  this.umur = umur;
  this.sayHello = function () {
    console.log(`halo nama sya ${nama}, umur saya ${umur} tahun`)
  }
  setInterval(() => {
    console.log(this.umur++)
  },900)
}
let siswa1 = new NamaSiswa ('idham', 16)

// Object Literal
// const mhs1 = {
//   nama: "idham hazard",
//   umur: 16,
//   sayHello: () => {
//     console.log(`halo nama saya ${this.nama}, saya ${this.umur} tahun`);
//     // console.log(this)
//   },
// };
