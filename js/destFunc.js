// Destructuring function retrun value

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b];
// }
// // console.log(penjumlahan(2,3)[0]);
// // console.log(penjumlahan(2,3)[1]);

// kalo array harus sesuai returnnya
// const [tambah, kurang, kali, bagi ='tidak ada'] = kalkulasi(5, 5);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     kurang: a - b,
//     tambah: a + b,
//     bagi: a / b,
//     kali: a * b,
//   };
// }

// const {tambah, bagi, kurang, kali} = kalkulasi (5, 5);
// console.log(kali);

// Destructuring function arguments
const mhs = {
  nama: "idham hazard",
  umur: `16 tahun`,
  nilai: {
    nilaiH: 80,
    uts: 90,
    uas: 100,
  },
};

function cetak({ nama, umur, nilai: { nilaiH, uts, uas } }) {
  return `halo nama saya ${nama}, saya ${umur} tahun, dan nilai UTS saya ${uts}`;
}

console.log(cetak(mhs));

