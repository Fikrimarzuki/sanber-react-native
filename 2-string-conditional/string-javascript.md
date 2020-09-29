Hari 2 – Javascript – String Properties & Method
Mengenal lebih dalam tentang tipe data string pada javascript

String adalah tipe data yang berisi karakter-karakter dibungkus dalam tanda petik ("" atau '' ). Karakter-karakter pada suatu string dapat diakses dengan menggunakan indeks atau posisi karakter berada. Indeks pada string selalu mulai dari 0.

var sentences = "Javascript" 
console.log(sentences[0]) // "J"
console.log(sentences[2]) // "v"
String pada javascript juga memiliki property dan methods tertentu. Property dan methods tersebut bisa kita gunakan dalam memanipulasi data agar sesuai dengan program yang kita inginkan.

String Properties 
.length
mengembalikan panjang atau jumlah karakter pada suatu string.

var word = "Javascript is awesome"
console.log(word.length) // 21 
String Methods
.charAt([indeks])

Mengembalikan karakter pada indeks yang diinginkan

console.log('i am a string'.charAt(3)); // 'm'
.concat([string])

Menggabungkan beberapa string dan mengembalikannya menjadi string baru.

var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck
.indexOf([string/karakter])

Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.

var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1
.substring([indeks awal], [indeks akhir (optional)])

Mengembalikan potongan string mulai dari indeks pada parameter pertama (indeks awal) sampai dengan indeks pada parameter kedua (indeks akhir). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

var car1 = 'Lykan Hypersport';
var car2 = car1.substr(6);
console.log(car2); // Hypersport
.substr([indeks awal], [jumlah karakter yang diambil (optional)])

Mendapatkan potongan string mulai dari indeks pada parameter pertama (indeks awal) dengan jumlah indeks pada parameter kedua (jumlah karakter). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

var motor1 = 'zelda motor';
var motor2 = motor1.substr(2, 2);
console.log(motor2); // ld
.toUpperCase()

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.

var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU
.toLowerCase()

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kecil

var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(lower); // this letter is for you
.trim()

Mengembalikan string baru yang sudah dihapus karakter whitespace (” “) pada awal dan akhir string tersebut.

var username    = ' administrator ';
var newUsername = username.trim(); 
console.log(newUsername) // 'administrator'
Mengubah tipe data dari dan ke String
Di Javascript terkadang kita ingin mengubah sebuah data string menjadi tipe data lain atau sebaliknya. Contoh diperoleh data angka tapi dalam tipe data String maka kita dapat mengubah string tersebut menjadi tipe data angka.

String([angka/array])

Fungsi global String() dapat dipanggil kapan saja pada program JavaScript dan akan mengembalikan data dalam tipe data String dari parameter yang diberikan.

var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'
.toString()

Mengonversi tipe data lain menjadi string. Bila data tersebut adalah array, setiap nilai akan dituliskan dan dipisah dengan karakter koma.

var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());  // '1,2'
Number([String])

Fungsi global Number() mengonversi tipe data string menjadi angka. Data yang diberikan pada parameter harus berupa karakter angka saja, dengan titik (separator) bila angka adalah bilangan desimal. Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN (Not a Number).

var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN
parseInt([String]) dan parseFloat([String])

Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string. Bila angka adalah bilangan desimal maka gunakan parseFloat(), bila tidak bilangan dibelakang koma akan diabaikan.

var int  = '89';
var real = '56.7';
var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56
var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(int); // strReal_2 = 56.7
Referensi Tambahan
String by Mozilla Developer Network
JavaScript String Reference by W3School
JavaScript Type Conversion
sumber: github hacktiv8 phase 0 materials

Updated on Agustus 25, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-1/javascript-string-method/