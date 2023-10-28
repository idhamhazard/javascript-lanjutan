// callback
// synchronus callback
// function halo(nama) {
//   alert(`halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukan Nama :");
//   callback(nama);
// }
// tampilkanPesan(halo)
// tampilkanPesan(nama => alert(`halo, ${nama}`));

// jQuery
console.log("mulai");
$.ajax({
  url: "mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: () => {},
});
console.log("selesai");
