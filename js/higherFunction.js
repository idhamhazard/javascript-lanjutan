// function kerjakanTugas (mataKuliah, selesai) {
//   return function selesai () {
//     console.log(`Mulai mengerjakan mata kuliah ${mataKuliah}, ...`)
//     alert(`Tugas mata kuliah ${mataKuliah} selesai`)
//   }
// }

// let tugas1 = kerjakanTugas('plbj')
// let tugas2 = kerjakanTugas('fisika')
// let tugas3 = kerjakanTugas('kimia')
// tugas1(this.selesai)
// tugas2(this.selesai)
// tugas3(this.selesai)

// function kerjakanTugas(mataKuliah) {
//   return function selesai() {
//     console.log(`Mulai mengerjakan mata kuliah ${mataKuliah}, ...`);
//     alert(`tugas mata kuliah ${mataKuliah} selesai`);
//   };
// }

// let tugas1 = kerjakanTugas("ipa");
// let tugas2 = kerjakanTugas("ips");
// let tugas3 = kerjakanTugas("mtk");

// tugas3(this.selesai);
// tugas2(this.selesai);
// tugas1(this.selesai);

// function hasil(n) {
//   for (let i = 0; i < n; i++)
//   console.log(i + 1);
// }
// hasil(20);

function repeat(n, action) {
  for (let i = 0; i < n; i++) 
  action(i+1);
}
repeat(10, console.log);
repeat(3, alert);

// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i + 1);
//   }
// }

// repeat(10, alert);
