function arrayToObject(array) {
  if (array.length) {
    const now = new Date();
    const thisYear = now.getFullYear();
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      let age;
      let person = {
        firstName: array[i][0],
        lastName: array[i][1],
        gender: array[i][2],
        age: array[i][3] && array[i][3] < thisYear ? thisYear - array[i][3] : "Invalid Birth Year"
      }
      let name = i + 1 + ". " + person.firstName + " " + person.lastName;
      obj[name] = person
    }
    console.log(obj);
  } else {
    console.log("\"\"")
  }
}

console.log("SOAL 1");
// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""



function shoppingTime(memberId, money) {
  const tokoX = [
    { nama: "Sepatu Stacattu", price: 1500000 },
    { nama: "Baju Zoro", price: 500000 },
    { nama: "Baju H&N", price: 250000 },
    { nama: "Sweater Uniklooh", price: 175000 },
    { nama: "Casing Handphone", price: 50000 }
  ]
  let changeMoney = money
  let bought = [];
  if (memberId) {
    if (money <= tokoX[tokoX.length-1].price) {
      return "Mohon maaf, uang tidak cukup";
    }
    for (let i = 0; i< tokoX.length; i++) {
      let barang = tokoX[i]
      if (changeMoney >= barang.price) {
        changeMoney -= barang.price;
        bought.push(barang.nama);
      }
    }
    return {
      memberId,
      money,
      listPurchased: bought,
      changeMoney
    }
  } else {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
}
 
console.log("\n\nSOAL 2");
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


function naikAngkot(arrPenumpang) {
  if (arrPenumpang.length) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let result = [];
    arrPenumpang.forEach(el => {
      const jarak = rute.findIndex(place => place === el[2]) - rute.findIndex(place => place === el[1])
      let obj = {
        penumpang: el[0],
        naikDari: el[1],
        tujuan: el[2],
        bayar: 2000 * jarak
      }
      result.push(obj);
    })
    return result;
  } else {
    return [];
  }
}
 
console.log("\n\nSOAL 3")
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]