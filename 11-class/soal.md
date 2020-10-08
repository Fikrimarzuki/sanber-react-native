Tugas 9 – Class
Pada tugas kali ini buatlah folder baru (Tugas 9 – Class) yang berisikan file dengan nama class.js . Simpan folder tugas ini di dalam folder repository project yang dikerjakan pada IMRN0920.

1. Animal Class 
Terdapat sebuah class Animal yang memiliki sebuah constructor name, default property legs = 4 dan cold_blooded = false.

Release 0
Buatlah class Animal yang menerima satu parameter constructor berupa name. Secara default class Animal akan memiliki property yaitu legs (jumlah kaki) yang bernilai 4 dan cold_blooded bernilai false.

Gunakan method getter untuk mengakses property di dalam class

class Animal {
    // Code class di sini
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
Release 1
Buatlah class Frog dan class Ape yang merupakan inheritance dari class Animal. Perhatikan bahwa Ape (Kera) merupakan hewan berkaki 2, hingga dia tidak menurunkan sifat jumlah kaki 4 dari class Animal. class Ape memiliki function yell() yang menampilkan “Auooo” dan class Frog memiliki function jump() yang akan menampilkan “hop hop”.

// Code class Ape dan class Frog di sini
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
2. Function to Class
Terdapat sebuah class dengan nama Clock yang ditulis seperti penulisan pada function, ubahlah fungsi tersebut menjadi class dan pastikan fungsi tersebut tetap berjalan dengan baik. Jalankan fungsi di terminal/console Anda untuk melihat hasilnya. (tekan tombol Ctrl + C pada terminal untuk menghentikan method clock.start())

Hint: Fokus soal ini hanya pada kegiatan mengubah struktur function Clock menjadi class. Jangan lupa menambahkan constructor di dalam class, dan ubah function di dalam Clock menjadi method pada class.

function Clock({ template }) {
  
  var timer;

  function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 
function di atas diubah menjadi struktur class seperti berikut:

class Clock {
    // Code di sini
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  
Jika sudah selesai dikerjakan, silahkan push hasil pekerjaan Anda ke repository Gitlab masing-masing (gunakan repository project yang sama IMRN0920 yang digunakan folder Tugas 9). Jangan lupa submit link commit Anda ke sanbercode.com.

Updated on Oktober 7, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-2-assignments/assignment-3-class/