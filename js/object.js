// object literal
let mahasiswa = {
  nama: "idham",
  energi: 50,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan`);
  },
};

// function declartion
function Mahasiswa(nama, energi) {
  let mahasiwa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan`);
  };
  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat bermain`);
  };
  return mahasiswa;
}
let siswa = Mahasiswa("galuh", 20);

// constructor function
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan`);
  };
  this.main = function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamt bermain`);
  };
  this.tidur = function (jam) {
    this.energi = jam * 2;
    console.log(`halo ${this.nama}, selmat tidur`);
  };
}
let namaSiswa = new Mahasiswa("ujang", 20);
