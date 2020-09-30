// 1. Looping WHILE
console.log("SOAL 1");

let i = 0;
let loop = 1;

while(true) {
  if(i === 0 && loop === 1) console.log("LOOPING PERTAMA");
  if(i > 20) {
    console.log("LOOPING KEDUA");
    loop = 2;
  }

  if(loop === 1) i++
  else i--

  if(loop != 1 && i === 0) break;

  if (i % 2 === 0) {
    if(loop === 1) console.log(i + " - " + "I love coding");
    else 
      console.log(i + " - " + "I will become a frontend developer");
  }
}

// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become a mobile developer
// 18 - I will become a mobile developer                                                                              
// 16 - I will become a mobile developer
// 14 - I will become a mobile developer
// 12 - I will become a mobile developer
// 10 - I will become a mobile developer
// 8 - I will become a mobile developer
// 6 - I will become a mobile developer
// 4 - I will become a mobile developer
// 2 - I will become a mobile developer




// 2. Looping FOR
console.log("\nSOAL 2");

for(let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " - " + "Berkualitas");
  } else if (i % 2 != 0) {
    if (i % 3 === 0) {
      console.log(i + " - " + "I Love Coding");
    } else {
      console.log(i + " - " + "Santai");
    }
  }
}

// OUTPUT 
// 1 - Santai
// 2 - Berkualitas
// 3 - I Love Coding 
// 4 - Berkualitas
// 5 - Santai
// 6 - Berkualitas
// 7 - Santai
// 8 - Berkualitas
// 9 - I Love Coding
// 10 - Berkualitas
// 11 - Santai
// 12 - Berkualitas
// 13 - Santai
// 14 - Berkualitas
// 15 - I Love Coding
// 16 - Berkualitas
// 17 - Santai
// 18 - Berkualitas
// 19 - Santai
// 20 - Berkualitas




// 3. Membuat Persegi Panjang
console.log("\nSOAL 3");

let col = 8;
let row = 4
for(let i = 0; i < row; i++) {
  let word = "";
  for(let j = 0; j < col; j++) {
    word += "#"
  }
  console.log(word);
}

// Output
// ########
// ########
// ########
// ######## 




// 4. Membuat Tangga
console.log("\nSOAL 4");

let dimension = 7;
let str = "";
for(let i = 0; i < dimension; i++) {
  str += "#";
  console.log(str);  
}

// Output
// #
// ##
// ###
// ####
// #####
// ######
// #######




// 5. Membuat Papan Catur
console.log("\nSOAL 5");

for(let i = 0; i < 8; i++) {
  let word = "";
  for(let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
      word += " ";
    } else {
      word += "#";
    }
  }
  console.log(word);
}

// Output
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 