// const halo = ["halo", "nama", "saya", "idham hazard"];
// // const [hi, satu, dua,tiga] = halo;
// // bisa dipanggil tidak semua
// const [hi, , , tiga] = halo;
// console.log(dua);
// console.log(tiga);

//swap items / menukar isi dari variabel
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// rest paramter
// const [a, ...value] = [1, 2, 3, 4, 5];
// console.log(value);

// destructuring object
// const siswa = {
//   nama: "idham hazard",
//   kelas: 11,
//   umur: 16,
// };

// const { nama, kelas, umur } = siswa;
// console.log(umur);

// assignment tanpa deklasrasi object
// ({ nama, umur, kelas } = { nama: "idham hazard", umur: 16, kelas: 11 });
// console.log(kelas);

// assignment ke variabel baru
// const mhs = {
//   nama: 'idham hazard',
//   umur: 3,
// }
// const {nama: n, umur: u} = mhs;
// console.log(n);

// memberikan default value
const biodata = {
  nama: "idham hazard",
  kelas: 11,
  umur: 16,
  email: "idham@gmail.com",
};

const { nama, kelas, umur, email = "defaultemail@gmail.com" } = biodata;
console.log(email);
