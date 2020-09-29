Hari 2 – Javascript – Intro
Javascript merupakan salah satu bahasa pemrograman yang terpopuler di dunia. Javascript membuat aplikasi web menjadi interaktif tanpa reload halaman. Hampir semua browser modern yang kita ketahui dapat menjalankan javascript agar website yang ditampilkan lebih menarik.

Menjalankan Javascript 
Ada bermacam cara untuk menjalankan kode javascript yang kita buat, di antaranya:

Menjalankan javascript di console browser
Menjalankan javascript di tools online seperti repl.it
Menjalankan javascript dengan nodejs
Pada materi ini kita akan mencoba untuk menjalankan script dengan nodejs.

Nodejs adalah software berbasis pemrograman javascript yang dijalankan di sisi server. Jika biasanya javascript kita kenal erat kaitannya dengan client/browser tapi dengan nodejs ini kita bisa membangun server menggunakan bahasa javascript.

Install Nodejs
Pertama-tama tentu kita harus menginstall terlebih dahulu nodejs di komputer kita. Berikut ini link untuk download nodejs (disarankan memilih versi LTS). Untuk OS Windows dan macOs tinggal diikuti saja instalasinya sampai selesai, sedangkan untuk Ubuntu 18.04 kamu bisa install mengikuti tutorial dari digitalocean.

Untuk mengecek apakah instalasi nodejs sudah berhasil kita bisa jalankan script di terminal kita:

$ node -v 
v10.16.1
$ npm -v 
6.9.0
dengan perintah tersebut, diketahui saat ini terinstall node dengan versi 10 dan npm versi 6.

Hello world 
Untuk menjalankan javascript dengan nodejs mari kita coba dengan menuliskan script di sebuah file index.js .

Buatlah file dengan nama index.js kemudian tulis code di dalam file tersebut seperti berikut:

var sayHello = "Hello World!" 
console.log(sayHello)
kemudian simpan file tersebut (save). Setelah itu kita bisa menjalankan script pada index.js tersebut dengan memberikan perintah seperti berikut pada terminal:

$ node index.js
secara otomatis pada terminal kita akan muncul “Hello World!” . (Selamat Anda telah berhasil menjalankan program pertama Anda 😁)

Demikian cara untuk menjalankan Javascript dengan nodejs.

Data Type 
Data Type atau dalam bahasa indonesia Tipe Data adalah sekumpulan informasi yang memiliki nilai dan karakteristik tertentu. Beberapa contoh tipe data pada javascript di antaranya:

Number : tipe data angka
String : tipe data berupa text atau kumpulan karakter, biasanya string dibungkus dalam tanda petik ganda (double quote) atau tanda petik tunggal (single quote).
Boolean: tipe data dengan nilai true atau false
Variable
Variable adalah suatu blok data untuk menampung sekumpulan data dengan berbagai tipe data apapun. Dengan variable kita bisa menyimpan suatu nilai untuk kemudian kita olah kembali pada program kita. Untuk deklarasi variable dalam javascript kita bisa gunakan sintaks var lalu diikuti nama variablenya.

var name = "John" // Tipe
var angka = 12
var todayIsFriday = false 

console.log(name) // "John"
console.log(angka) // 12
console.log(todayIsFriday) // false
Waspadai pendeklarasian variable yang tidak bernilai !

var items
console.log(items) // Undefined
Operator
Operator adalah karakter khusus yang merepresentasikan sebuah tindakan. Operator terbagi ke dalam beberapa jenis:

Operator Aritmatika Operator yang melibatkan operasi matematika seperti tambah, kurang, kali, bagi.
Tambah (+)
Kurang (–)
Kali (*)
Bagi (/)
Modulus (%)
Modulus adalah sisa bagi. Contohnya 5%3 hasilnya adalah 2, 100%5 hasilnya 0.
Operator Assignment (=), Operator untuk mendaftarkan atau meng-assign suatu nilai ke dalam suatu variable
var angka 
angka = 10 // Contoh assignment variable angka dengan nilai 10
Operator Perbandingan, Operator yang membandingkan suatu nilai dengan nilai yang lain. Hasil dari perbandingan ini akan dikembalikan dalam tipe data boolean true atau false.
Equal Operator (==)
var angka = 100
console.log(angka == 100) // true
console.log(angka == 20) // false
Not Equal ( != )
var sifat = "rajin"
console.log(sifat != "malas") // true
console.log(sifat != "bandel") //true 
Strict Equal ( === ) Selain membandingkan dua nilai nya, strict equal juga membandingkan tipe datanya apakah sama atau tidak
var angka = 8
console.log(angka == "8") // true, padahal "8" adalah string.
console.log(angka === "8") // false, karena tipe data nya berbeda
console.log(angka === 8) // true 
Strict not Equal ( !== ) Kebalikan dari strict equal.
var angka = 11
console.log(angka != "11") // false, padahal "11" adalah string
console.log(angka !== "11") // true, karena tipe datanya berbeda
console.log(angka !== 11) // false
Kurang dari & Lebih Dari ( <, >, <=, >=)
var number = 17
console.log( number < 20 ) // true
console.log( number > 17 ) // false
console.log( number >= 17 ) // true, karena terdapat sama dengan
console.log( number <= 20 ) // true
Operator Kondisional, Operator yang mengkombinasikan dua nilai kebenaran . Terdapat operator AND (&&) dan OR (||)
OR ( || )
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false
AND ( && )
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true 
Updated on Agustus 25, 2020

source: https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-1/javascript/
