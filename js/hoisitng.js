let nama = "idham hazard";
let instagram = "@idhamhazard3";
function instagramSaya(instagram) {
  // console.log(arguments[0])
  let linkURL = "http://instagram.com/";
  return linkURL + instagram;
}
// console.log(instagramSaya('dody', 'kio'));
console.log(instagramSaya(`${instagram} ini instagram saya`));
