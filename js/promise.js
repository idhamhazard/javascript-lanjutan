// Jquery
// $.ajax ({
//   url: 'http://www.omdbapi.com/?i=tt3896198&apikey=3c0d3b69',
//   success: movie => console.log(movie)
// });

// Fetch
// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3c0d3b69")
//   .then((movie) => movie.json())
//   .then((movie) => console.log(movie));

// Promise
// Object yang mempresentasikan keberhasilan / kegagalan dari sebuah event yang asynchronous dimasa yang akan datang
// Janji ( tepenuhi / ingkar )
// States ( fulfilled / rejected / pending )
// Callback ( resolve / reject / finally)
// Aksi ( then / catch)

// contoh 1
// const janjinya = false;
// const janji = new Promise((resolve, reject) => {
//   if (janjinya) {
//     resolve("Janji Ditepati!!!");
//   } else {
//     reject("Ingkar Janji...");
//   }
// });

// janji.then((resolve) => console.log("OK : " + resolve)).catch((reject) => console.log("NOT OK : " + reject));

// contoh 2
// const janjinya = true;
// const janji = new Promise((resolve, reject) => {
//   if (janjinya) {
//     setTimeout(() => {
//       resolve("Janji ditepati setelah beberapa waktu");
//     }, 5000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu");
//     }, 5000);
//   }
// });

// console.log("Mulai");
// console.log(janji.then(() => console.log(janji)));
// janji
//   .finally(() => console.log("Selesai Menunggu"))
//   .then((resolve) => console.log("OK : " + resolve))
//   .catch((reject) => console.log("NOT OK : " + reject));
// console.log("Selesai");

// Promise.all()
const movie = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      judul: "Pengabdi Setan",
      sutradara: "Idham Hazard",
      pemeran: "Farrel, Ujang",
    });
  }, 2000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      kota: "Jakarta",
      jam: 16.0,
      kondisi: "Mendung",
    });
  }, 1000);
});

// movie.then((resolve) => console.log(resolve));
// cuaca.then((resolve) => console.log(resolve));

// Panggil sekaligus
Promise.all([movie, cuaca])
  // .then((resolve) => console.log(resolve));
  .then((resolve) => {
    const [movie, cuaca] = resolve;
    console.log(movie);
    console.log(cuaca);
  });
