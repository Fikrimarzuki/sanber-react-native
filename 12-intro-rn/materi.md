Hari 5 – React Native Intro
Akhirnya mulai kita mengenal React Native secara langsung. Namun sebelum mulai ngoding menggunakan React Native, terlebih dahulu kita pelajari algoritma data cara berpikir dalam mengembangkan aplikasi berbasis React (termasuk React Native) yang disebut React Thinking.

https://blog.sanbercode.com/wp-content/uploads/2020/06/React_Thinking1-1024x576.png

Gambaran Umum React Thinking
React Thinking
Salah satu kelebihan dari React adalah, kita bisa membangun aplikasi sambil merancangnya secara langsung / real-time. Untuk itu langsung kita mulai mempelajari bagaimana tahapan suatu aplikasi React dibuat.

https://blog.sanbercode.com/wp-content/uploads/2020/06/React_Thinking2-1024x576.png

React Thinking (Bagian 1)
1. Memiliki / Merancang Mockup – User Interface
Sebelum mulai mengoding terlebih dahulu dilakukan perancangan/desain aplikasi yang akan dibuat, contoh seperti di bawah ini:

https://reactjs.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png

Aplikasi tersebut menggunakan API yang diperoleh dalam format JSON berikut:

[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
2. Membagi UI menjadi Hirarki Komponen
Selanjutnya rancangan tersebut kita bagi menjadi beberapa bagian/komponen. Cara membagi rancangan tersebut seperti ketika kita membagi/mengelompokkan suatu function atau object. Bisa juga dibagi dengan menggunakan prinsip single responsibility principle, dimana setiap komponen/fungsi/objek sebaiknya hanya memiliki 1 pekerjaan atau output, sehingga rancangan sebelumnya dapat dibagi menjadi seperti berikut: 

https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png

Container (orange): meliputi semua bagian aplikasi
SearchBar (blue): fungsi cari yang menerima input dari user
ProductTable (green): menampilkan data dan hasil filter dari SearchBar
ProductCategoryRow (turquoise): menampilkan kelompok kategori produk
ProductRow (red): menampilkan data produk (nama dan harga)
Berdasarkan pengelompokkan tersebut, dapat disusun hirarki komponen sebagai berikut:

https://blog.sanbercode.com/wp-content/uploads/2020/06/React_Thinking3-1024x576.png

Container
SearchBar
ProductTable
ProductCategoryRow
ProductRow

React Thinking (Bagian 2)
3. Membangun UI Statis (tanpa state) 
Setelah memiliki hirarki komponen, selanjutnya kita bisa mulai ngoding tampilan UI. Pada aplikasi sederhana ini, lebih mudah memulai dari komponen pada hirarki tertinggi ke hirarki terendah, sementara pada aplikasi yang kompleks akan cenderung lebih mudah memulai dari hirarki terendah ke komponen hirarki tertinggi. 

Pada tahap ini sebaiknya tidak menggunakan state (data dapat berubah yang dimiliki komponen terkait) dan hanya menggunakan props, dimana props akan mentransfer data dari komponen hirarki atas (parent) ke komponen hirarki bawah (children).

Untuk memahami props dan state bisa melihat dokumentasi Reactjs:
https://reactjs.org/docs/state-and-lifecycle.html
https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props

4. Identifikasi Kebutuhan State Minimal yang Dibutuhkan UI
Untuk membuat UI menjadi interaktif, diperlukan cara untuk mengubah data yang dapat dilakukan menggunakan state. Dan pastikan jumlah state yang digunakan se-minimal mungkin. Beberapa data yang terdapat & dibutuhkan pada aplikasi ini antara lain:

Daftar produk awal (dari API)
Teks masukkan user di SearchBar
Nilai dari checkbox
Daftar produk yang telah di-filter
Untuk menentukan apakah suatu data ditetapkan sebagai state atau tidak, dapat menggunakan pertanyaan berikut untuk masing-masing data yang ada:

Apakah data tersebut berasal dari komponen parent?
Apakah data tersebut bersifat tetap dan tidak berubah?
Dapatkah data tersebut diperoleh dari data lain yang ada di dalam komponen?
Jika terdapat jawaban Ya, maka data tersebut tidak ditetapkan sebagai state. Sehingga state pada aplikasi ini antara lain:

Teks masukkan user di SearchBar
Nilai dari checkbox
5. Identifikasi Komponen yang Membutuhkan State
Lakukan tahapan berikut pada masing-masing state yang telah teridentifikasi ada di dalam aplikasi:

Identifikasi komponen yang me-render suatu data yang bergantung pada state tersebut.
Cari komponen yang mirip/sejenis (satu komponen di hirarki yang lebih tinggi yang memerlukan state tersebut)
State sebaiknya disimpan pada komponen tersebut atau komponen yang berada di atasnya (parent)
Jika komponen seperti itu tidak ditemukan, maka buat komponen baru di atasnya (sebagai parent) untuk menyimpan state yang diperlukan.
6. Tambahkan Aliran Data Terbalik (Inverse Data Flow)
Setelah membuat rancangan aliran data dengan baik, menggunakan props dan state, selanjutnya adalah memastikan bahwa aliran data dapat berfungsi sesuai kebutuhan. Contohnya adalah ketika melakukan input pada SearchBar maka terjadi filter data. Dan ketika input tersebut dihapus maka data kembali menjadi seperti data awal sebelum di filter. 

Pada aplikasi ini, fungsi tersebut dapat dicapai dengan cara Container mengirimkan fungsi update kepada SearchBar (sebagai props) sehingga ketika melakukan input, fungsi tersebut menerimanya dan melakukan update kepada ProductTable dan menampilkan hasil search/filter dari input tersebut.

Sumber: https://reactjs.org/docs/thinking-in-react.html

Persiapan dan Membuat Proyek React Native menggunakan Expo
Selanjutnya kita akan melakukan persiapan dalam membuat proyek React Native menggunakan Expo. Anda dapat mengikuti tahap-tahap persiapan dan pembuatan proyek ini dengan membaca dokumentasi pada Tugas 10 – React Native Intro.

Updated on September 4, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-2/hari-5-react-native-intro/