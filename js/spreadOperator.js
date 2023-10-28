// spread operators
// memecah iterables menjadi single elemen

// const mhs = ['idham', 'ujang', 'farel'];
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ['idham', 'kiting', 'farrel'];
// const guru = ['yanto', 'mujari', 'yamin'];
// const orang = [...mhs, 'anton', ...guru]
// console.log(orang);

// meng-copy array
// const mhs = ["dodi", "idham", "farrel"];
// const mhs1 = [...mhs];
// mhs1[0] = "toni";
// console.log(mhs);

const liNama = document.querySelectorAll(".nama");
const nama = [...liNama].map((n) => n.innerHTML);
console.log(nama);
