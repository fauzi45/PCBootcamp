// Challenge 1

function bandingkanAngka(angka1, angka2) {
  return angka1 < angka2 ? true : angka1 == angka2 ? -1 : false;
}

//Challenge 5
// TEST CASES
console.log("\nChallenge 1");
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

//Challenge 2
function balikKata(kata) {
  let kalimat = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    kalimat += kata[i];
  }
  return kalimat;
}

// TEST CASES
console.log("\nChallenge 2");
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

//Challenge 3
function konversiMenit(menit) {
  var hours = menit / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = 9 > Math.round(minutes) ? "0" + Math.round(minutes) :  Math.round(minutes); 
  return  rhours + ":" + rminutes;

}

// TEST CASES
console.log("\nChallenge 3");
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

//Challenge 4

function xo(str) {
  let katax = 0;
  let katao = 0;
  for (let index = 0; index < str.length; index++) {
    let kata = str[index];
    kata == "x" ? katax++ : kata == "o" ? katao++ : undefined;
  }

  return katax === katao;
}

console.log("\nChallenge 4");
// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true

//Challenge 5
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

const dataHandling = (params) => {
  // let output
  let data = "";
  for (let i = 0; i < params.length; i++) {
    let kalimat = params[i];
    data += `Nomor ID: ${kalimat[0]} \n`;
    data += `Nama Lengkap: ${kalimat[1]} \n`;
    data += `TTL: ${kalimat[2]} ${kalimat[3]} \n`;
    data += `Hobi: ${kalimat[4]} \n\n`;
  }
  return data;
};
console.log("\nChallenge 5");
console.log(dataHandling(input));

// Expected Result
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun
