// SOAL 1 - RANGE
function range(startNum, finishNum) {
  let result = [ startNum ];
  if (startNum && finishNum) {
    while(startNum !== finishNum) {
      if (startNum > finishNum) {
        startNum--
      }
      if (startNum < finishNum) {
        startNum++
      }
      result.push(startNum);
    }
  } else {
    result = -1
  }
  return result;
}

console.log("SOAL 1")
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 


// SOAL 2 - RANGE WITH STEP

function rangeWithStep(startNum, finishNum, step) {
  let result = [ startNum ];
  let status = true;
  while(status && startNum !== finishNum) {
    if (startNum > finishNum) {
      startNum -= step
      if (startNum < finishNum) {
        status = false
        break
      }
    }
    if (startNum < finishNum) {
      startNum += step
      if (startNum > finishNum) {
        status = false
        break
      }
    }
    result.push(startNum);
  }
  return result;
}

console.log("\nSOAL 2")
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

// SOAL 3 - SUM OF RANGE

function sum(start = 0, finish = 0, step = 1) {
  let total = rangeWithStep(start, finish, step)
  return total.reduce((num, num2) => num + num2)
}

console.log("\nSOAL 3")
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

// SOAL 4 - ARRAY MULTIDIMENSI

function dataHandling(array) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result += `
    Nomor ID: ${array[i][0]}
    Nama Lengkap: ${array[i][1]}
    TTL: ${array[i][2]} ${array[i][3]}
    Hobi: ${array[i][4]}
    `                
  }
  return result;
}

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

console.log("\nSOAL 4")
console.log(dataHandling(input));

// SOAL 5 - BALIK KATA

function balikKata(word) {
  let kata = ""
  for (let i = word.length - 1; i >= 0; i--) {
      kata += word[i];
  }
  return kata;
}

console.log("\nSOAL 5")
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

// SOAL 6 - METODE ARRAY

function dataHandling2(array) {
  array.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(array);
  let date = array[3].split("/");
  switch(date[1]) {
    case "01":
    case 01:
      var bulan = "Januari";
      break;
    case "02":
    case 02:
      var bulan = "Februari";
      break;
    case "03":
    case 03:
      var bulan = "Maret";
      break;
    case "04":
    case 04:
      var bulan = "April";
      break;
    case "05":
    case 05:
      var bulan = "Mei";
      break;
    case "06":
    case 06:
      var bulan = "Juni";
      break;
    case "07":
    case 07:
      var bulan = "Juli";
      break;
    case "08":
    case 08:
      var bulan = "Agustus";
      break;
    case "09":
    case 09:
      var bulan = "September";
      break;
    case "10":
    case 10:
      var bulan = "Oktober";
      break;
    case "11":
    case 11:
      var bulan = "November";
      break;
    case "12":
    case 12:
      var bulan = "Desember";
      break;
  }
  console.log(date);
  console.log(bulan);
  let sorting = array[3].split("/").sort((a, b) => b - a);
  console.log(sorting);
  date = date.join("-");
  console.log(date);
  let slicing = array[1].slice(0, 15);
  console.log(slicing)
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

console.log("\nSOAL 6")
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */ 
