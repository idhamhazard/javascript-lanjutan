function selamatMakan (waktu) {
  return function (nama) {
    console.log(`halo ${nama}, selamat makan ${waktu}, semoga kenyang!!!`)
  }
}

let makanPagi = selamatMakan ('Pagi')
let makanSiang = selamatMakan ('Siang')
let makanSore = selamatMakan ('Sore')
let makanMalam = selamatMakan ('Malam')

makanPagi('idham')
makanMalam('hazard')
makanSore('anto')

function init () {
  let nama = 'idham hazard';
  function tampilNama () {
    console.log(nama)
  }
  tampilNama()
}
init()

let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
}();

// let a = add()

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());


