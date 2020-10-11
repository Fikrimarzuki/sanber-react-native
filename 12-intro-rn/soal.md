Tugas 10 – React Native Intro
Pada tugas kali ini Anda diminta untuk membuat project Expo bernama SanberApp. Lakukan proses pembuatan project baru di dalam folder repository project yang dikerjakan pada tugas 1. Setelah berhasil, lakukan push ke repo di Gitlab Anda. (Jika Anda tidak ingin menggunakan Expo, diperbolehkan untuk membuat project menggunakan React Native CLI)

Anda bisa mengikuti langkah-langkah yang terdapat pada artikel ini, dan jika diperlukan, maka Anda dapat mengikuti langkah-langkah pada video berikut:

https://youtu.be/Bq9I2FNyC-k

Install Expo CLI
Pada tugas kali ini, teman-teman bisa mencoba untuk melakukan instalasi expo CLI di PC/Laptop masing-masing. Pastikan sudah terinstall nodeJs sebelumnya. (Jika belum install nodeJs bisa menuju https://nodejs.org/en/download/ dan pilih versi LTS dan pilih sesuai OS yang digunakan). Jalankan command berikut di terminal/command prompt, untuk memastikan nodeJs sudah ter install.

$ node --version
v12.18.1 
$ npm --version
v6.14.5 
//sudah terinstall node versi 12.18.1 dan npm versi 6.14.5 
Setelah memastikan nodeJS sudah terinstall selanjutnya adalah meng-install expo-CLI. Perlu diperhatikan bahwa pada proses ini akan dilakukan proses download, sehingga kecepatan proses ini bergantung pada kecepatan dan sinyal internet yang digunakan.

 $ npm install --global expo-cli  
Jika sudah selesai, bisa menjalankan perintah berikut untuk mengetahui apakah expo-cli sudah terinstall

$ expo --version
3.21.10
// sudah terinstal expo-cli versi 3.21.10
Membuat project React Native menggunakan Expo
Sebelum membuat project baru, silahkan untuk terlebih dahulu mendaftarkan akun di expo.io ( https://expo.io/signup ). Akun ini akan berguna ketika hendak melakukan build APK/IPA, mengelola update aplikasi secara OTA (Over The Air), dan beberapa fitur lainnya.

Jika sudah mendaftar, masuk ke dalam folder project imrn0920, dan jalankan perintah berikut di terminal:

$ cd imrn0920    // pindah ke folder repo project

$ expo init SanberApp    // membuat project dengan nama aplikasi SanberApp
Selanjutnya Anda akan diminta untuk memilih template. Pilih pada bagian “Managed Workflow” dan “blank”.

https://blog.sanbercode.com/wp-content/uploads/2020/06/template_expo.png

Pilihan template pada project expo
Selanjutnya tinggal menunggu project Expo dibuat. Jika ditemukan beberapa pesan error bisa diabaikan selama pada akhir prosesnya Anda diminta untuk menjalankan perintah cd SanberApp dan npm start (atau yarn start, jika telah meng-install yarn di PC/Laptop Anda).

https://blog.sanbercode.com/wp-content/uploads/2020/06/init_finish_npm.png

Contoh tampilan setelah berhasil membuat project expo baru
Mempersiapkan Smartphone / Emulator
Sebelum mulai menjalankan project yang telah dibuat, terlebih dahulu perlu kita siapkan device atau perangkat untuk proses simulasi/debugging. Jika Anda memiliki perangkat Android dengan versi OS minimal 5.0 Lollipop, maka disarankan untuk menggunakannya dalam tahap ini.

Jika Anda sedang tidak memiliki perangkat Android tersebut, maka Anda bisa menggunakan Emulator (bisa mencoba AVD dari Android Studio atau emulator lain). Jika tidak bisa menggunakan emulator, maka bisa menjalankan project expo di web/browser melalui perintah di terminal (npm run web) atau bisa juga menggunakan snack.expo.io (hanya saja, memiliki banyak keterbatasan).

Pastikan perangkat Android Anda sudah mengaktifkan Developer Mode atau Mode Pengembang. Caranya dengan menuju halaman Settings/Setelan, kemudian About Phone/Tentang Ponsel, dan tekan bagian Version Number/Nomor Versi, beberapa kali sampai muncul pop up bahwa Anda telah mengaktifkan Developer Mode (atau Anda bisa mencari di web tentang “cara mengaktifkan developer mode smartphone android samsung”, karena beberapa model/merek terkadang memiliki cara yang sedikit berbeda).

Setelah Developer Mode tersebut aktif, masuk ke menu Developer Options, dan Anda bisa mengaktifkan USB Debugging. Jika sudah, maka selanjutnya adalah meng-install aplikasi Expo dari Google Play Store. Setelah aplikasi tersebut terinstall di smartphone, Anda bisa login menggunakan akun Expo yang sudah didaftarkan sebelumnya.

Menjalankan Project Expo
Jika Anda memiliki kabel data, Anda bisa mengubungkan PC/Laptop dengan smartphone Anda (atau bisa juga menjalankan project Expo menggunakan LAN atau WiFi). Pastikan Anda sudah masuk ke dalam folder project Expo. Kemudian jalankan perintah berikut:

$ cd SanberApp    // masuk ke folder project Expo yang baru dibuat

$ npm start    // atau expo start, untuk menjalankan project Expo 
Setelah muncul QR Code, baik pada terminal maupun web browser, buka aplikasi Expo di smartphone Anda gunakan tools “Scan QR Code” dan arahkan pada QR Code yang muncul. (aktifkan “Allow display over the apps” dan tekan tombol back smartphone Anda — bukan back pada aplikasi).

Terkadang terjadi error dikarenakan smartphone dan nodeJs di blok oleh sistem atau anti virus. Pastikan sistem Anda (termasuk anti virus) mengijinkan akses smartphone dan nodeJs.

Jika berhasil, maka akan muncul di layar smartphone Anda tulisan “Open up App.js to start working on your app!” dengan background putih.

Penting:

Jika Anda menyimpan proyek Expo di folder repository Gitlab dari IMRN0920, maka sebelum melakukan push ke repository di Gitlab, terlebih dahulu hapus folder .git pada folder proyek expo Anda (folder ini biasanya dalam kondisi hidden).

Jika sudah selesai dikerjakan, silahkan push hasil pekerjaan Anda ke repository Gitlab masing-masing (gunakan repository project yang sama IMRN0920 yang digunakan folder SanberApp). Jangan lupa submit link commit Anda ke sanbercode.com.

untuk proses pengumpulan dapat di lihat di link ini : https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/introduction/proses-pengumpulan-tugas/

Updated on Oktober 9, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-2-assignments/tugas-10-react-native-intro/