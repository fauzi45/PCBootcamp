//Challenge 1

function palindrome(kata) {
  let kalimat = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    kalimat += kata[i];
  }
  return kalimat === kata;
}

// TEST CASES
//   console.log("Challenge 1");
//   console.log(palindrome('katak')); // true
//   console.log(palindrome('blanket')); // false
//   console.log(palindrome('civic')); // true
//   console.log(palindrome('kasur rusak')); // true
//   console.log(palindrome('mister')); // false

//Challenge 2
function hitungJumlahKata(kalimat) {
  banyakKata = 0;
  for (let index = 0; index < kalimat.length; index++) {
    const kata = kalimat[index];
    if (kata == " ") {
      banyakKata++;
    }
  }
  return banyakKata + 1;
}

// TEST CASES
// console.log("\nChallenge 2");
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5

function changeVocals(str) {
  let kata = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element == "a") {
      kata += "b";
    } else if (element == "i") {
      kata += "j";
    } else if (element == "u") {
      kata += "v";
    } else if (element == "e") {
      kata += "f";
    } else if (element == "o") {
      kata += "p";
    } else if (element == "A") {
      kata += "B";
    } else if (element == "I") {
      kata += "J";
    } else if (element == "U") {
      kata += "V";
    } else if (element == "E") {
      kata += "F";
    } else if (element == "O") {
      kata += "P";
    } else {
      kata += element;
    }
  }
  return kata;
}
function reverseWord(str) {
  let kalimat = "";
  for (let i = str.length - 1; i >= 0; i--) {
    kalimat += str[i];
  }
  return kalimat;
}

function setLowerUpperCase(str) {
  let kata = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element == element.toUpperCase()) {
      kata += element.toLowerCase();
    } else {
      kata += element.toUpperCase();
    }
  }
  return kata;
}

function removeSpaces(str) {
  let kata = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element !== " ") {
      kata += element;
    }
  }
  return kata;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal Karakter yang diinputkan adalah 5 karakter";
  }
  return changeVocals(setLowerUpperCase(reverseWord(removeSpaces(name))));
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

//Challenge 4
function meleeRangedGrouping(str) {
  let groupAll = [];
  let groupMelee = [];
  let groupRanged = [];
  let perGroup = "";
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element !== ",") {
        perGroup += element;
    }
  }
  groupAll.push(perGroup)
  return groupAll;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
//   [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(
//   meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
// );
//   [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping("")); // []

function stringToArray(string) {
  let multi = [];
  let dimen = [];
  for (let i = 0; i < string.length; i++) {
    const hasil = string[i];
    if (hasil !== ",") {
      dimen = [...dimen, hasil];
      if (!string[i + 1]) {
        multi = [...multi, dimen];
        dimen = [];
      }
    } else {
      multi = [...multi, dimen];
      dimen = [];
    }
  }
  return multi;
}

// console.log(stringToArray("aqrst,ukaei,ffooo"));

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

// console.log(stringToArray("qwer,tyui,asdf,ghjk"));

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]
