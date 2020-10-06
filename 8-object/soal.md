Tugas 6 – Object Literal
Pada tugas kali ini buatlah folder baru (Tugas 6 – Object) yang berisikan file dengan nama object.js . Simpan folder tugas ini di dalam folder repository project yang dikerjakan pada Tugas 1.

Soal No. 1 (Array to Object)
Buatlah function dengan nama arrayToObject() yang menerima sebuah parameter berupa array multidimensi. Dalam array tersebut berisi value berupa First Name, Last Name, Gender, dan Birthyear. Data di dalam array dimensi tersebut ingin kita ubah ke dalam bentuk Object dengan key bernama : firstName, lastName, gender, dan age. Untuk key age ambillah selisih tahun yang ditulis di data dengan tahun sekarang. Jika tahun tidak terdefinisi atau tahunnya lebih besar dibandingkan dengan tahun sekarang maka kembalikan nilai : “Invalid birth year”.

Contoh: jika input nya adalah [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]

maka outputnya di console seperti berikut :

1. Abduh Muhamad : { firstName: "Abduh", lastName: "Muhamad", gender: "male", age: 28}
2. Ahmad Taufik : { firstName: "Ahmad", lastName: "Taufik", gender: "male", age: 35} 
Untuk mendapatkan tahun sekarang secara otomatis bisa gunakan Class Date dari Javascript.

var now = new Date()
var thisYear = now.getFullYear() // 2020 (tahun sekarang)
Code

function arrayToObject(arr) {
    // Code di sini 
}
 
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
Soal No. 2 (Shopping Time)
Problem

Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberIddan parameter ke-2 merupakan value uang (money) yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan “Mohon maaf, toko X hanya berlaku untuk member saja”
Jika uang yang dimiliki kurang dari 50000 maka tampilkan “Mohon maaf, uang tidak cukup”
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: ‘324193hDew2’ dan money: 700000

maka output:

{ memberId: ‘324193hDew2’, money: 700000, listPurchased: [ ‘Baju Zoro’, ‘Sweater Uniklooh’ ], changeMoney: 25000 }

Code

function shoppingTime(memberId, money) {
  // you can only write your code here!
}
 
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
Soal No. 3 (Naik Angkot)
Problem

Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A – F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [ [‘Dimitri’, ‘B’, ‘F’] ] output: [{ penumpang: ‘Dimitri’, naikDari: ‘B’, tujuan: ‘F’, bayar: 8000 }]

Code

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
}
 
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]
Sumber soal: github hacktiv8 phase 0 exercises

Jika sudah selesai dikerjakan, silahkan push hasil pekerjaan Anda ke repository Gitlab masing-masing (gunakan repository project yang sama IMRN0920 yang digunakan folder Tugas 6). Jangan lupa submit link commit Anda ke sanbercode.com.

Updated on Oktober 1, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-2-assignments/assignment-2-object-literal/
