Tugas 8 – Asynchronous
Menggunakan callback dan promise

Pada tugas kali ini buatlah folder baru (Tugas 8 – Asynchronous) yang berisikan 4 file dengan nama index.js, callback.js, index2.js dan promise.js. Simpan folder tugas ini di dalam folder repository project yang dikerjakan pada Tugas IMRN0920.

Soal No. 1 (Callback Baca Buku)
Kita mempunyai tumpukan buku untuk dibaca. Setiap buku memiliki waktu yang dibutuhkan untuk menghabiskan buku tersebut. Sudah disediakan function readBooks yang menerima tiga parameter: waktu, buku yang dibaca, dan sebuah callback. Salin code berikut ke dalam sebuah file bernama callback.js .

// di callback.js
function readBooks(time, book, callback ) {
    console.log(`saya membaca ${book.name}`)
    setTimeout(function(){
        let sisaWaktu = 0
        if(time > book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            console.log(`saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
            callback(sisaWaktu) //menjalankan function callback
        } else {
            console.log('waktu saya habis')
            callback(time)
        }   
    }, book.timeSpent)
}
 
module.exports = readBooks 
Masih satu folder dengan file callback.js, buatlah sebuah file dengan nama index.js lalu tuliskan code seperti berikut.

// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
lanjutkan code pada index.js untuk memanggil function readBooks. Buku yang akan dihabiskan adalah buku-buku di dalam array books. Pertama function readBooks menerima input waktu yang dimiliki yaitu 10000 ms (10 detik) dan books pada indeks ke-0. Setelah mendapatkan callback sisa waktu yang dikirim lewat callback, sisa waktu tersebut dipakai untuk membaca buku pada indeks ke-1. Begitu seterusnya sampai waktu habis atau semua buku sudah terbaca. Untuk melihat output, jalankan file index.js dengan node js :

 $ node index.js
Soal No. 2 (Promise Baca Buku)
Setelah no.1 berhasil, implementasikan function readBooks yang menggunakan callback di atas namun sekarang menggunakan Promise. Buatlah sebuah file dengan nama promise.js. Tulislah sebuah function dengan nama readBooksPromise yang me-return sebuah promise seperti berikut:

// di file promise.js
function readBooksPromise (time, book) {
  console.log(`saya mulai membaca ${book.name}`)
  return new Promise( function (resolve, reject){
    setTimeout(function(){
      let sisaWaktu = time - book.timeSpent
      if(sisaWaktu >= 0 ){
          console.log(`saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
          resolve(sisaWaktu)
      } else {
          console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`)
          reject(sisaWaktu)
      }
    }, book.timeSpent)
  })
}
 
module.exports = readBooksPromise
Masih di folder yang sama dengan promise.js, buatlah sebuah file dengan nama index2.js. Tuliskan code sebagai berikut

var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
Lakukan hal yang sama dengan soal no.1, habiskan waktu selama 10000 ms (10 detik) untuk membaca semua buku dalam array books.!

Jika sudah selesai dikerjakan, silahkan push hasil pekerjaan Anda ke repository Gitlab masing-masing (gunakan repository project yang sama IMRN0920 yang digunakan folder Tugas 8). Jangan lupa submit link commit Anda ke sanbercode.com.

Updated on Oktober 7, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-2-assignments/assignment-4-asynchronous/