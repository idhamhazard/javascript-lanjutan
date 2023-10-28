// Menggunakan Prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan`;
//   };
//   Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat bermain`;
//   };
//   Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur`;
//   };
// }

// let idham = new Mahasiswa("idham", 20);

// Menggunakan Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `halo ${this.nama}, selamat makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `halo ${this.nama}, selamat bermain`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `halo ${this.nama}, selamat tidur`;
  }
}
let idham = new Mahasiswa("idham", 20);

