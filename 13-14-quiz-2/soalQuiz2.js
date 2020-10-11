/**
 * Berikut soal quiz kali ini, terdiri dari 3 Soal
 * Kerjakan dengan sebaik mungkin, dengan menggunakan metode yang telah dipelajari,
 * Tidak diperkenankan untuk menjawab hanya dengan console.log('teks jawaban');
 * maupun dengan terlebih dahulu memasukkannya ke dalam variabel, misal var a = 'teks jawaban'; console.log(a);
 * 
 * Terdapat tambahan poin pada setiap soal yang dikerjakan menggunakan sintaks ES6 (+5 poin)
 * Jika total nilai Anda melebihi 100 (nilai pilihan ganda + coding), tetap akan memiliki nilai akhir yaitu 100
 * 
 * Selamat mengerjakan
*/

/*========================================== 
  1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)
  ==========================================
  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/

class Score {
  constructor(subject, points, email) {
    this.subject = subject,
    this.points = this.average(points),
    this.email = email
  }

  average(points) {
    if (points && typeof points === "number") {
      return points;
    } else if (Array.isArray(points) && points.length !== 0) {
      let length = points.length;
      points = points.reduce((total, num) => total + num);
      return points/length;
    } else {
      return 0;
    }
  }
}

console.log("SOAL 1");
let subject1 = new Score("bahasa", 20, "bahasa@mail.com");
console.log(subject1.subject, subject1.points, subject1.email);
let subject2 = new Score("mathematics", [20, 20, 25, 25], "math@mail.com");
console.log(subject2.subject, subject2.points, subject2.email);
console.log("");

/*=========================================== 
  2. SOAL Create Score (10 Poin + 5 Poin ES6)
  ===========================================
  Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
  Function viewScores mengolah data email dan nilai skor pada parameter array 
  lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
  Contoh: 

  Input
   
  data : 
  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
  ]
  subject: "quiz-1"

  Output 
  [
    {email: "abduh@mail.com", subject: "quiz-1", points: 78},
    {email: "khairun@mail.com", subject: "quiz-1", points: 95},
  ]
*/

const data = [
  ["email", "quiz - 1", "quiz - 2", "quiz - 3"],
  ["abduh@mail.com", 78, 89, 90],
  ["khairun@mail.com", 95, 85, 88],
  ["bondra@mail.com", 70, 75, 78],
  ["regi@mail.com", 91, 89, 93]
]

function viewScores(data, subject) {
  let result = [];
  let template = [];
  data.forEach((el, index) => {
    if (index === 0) {
      template = el;
    } else {
      let obj = {};
      template.forEach((report, index) => {
        if (report === "email") {
          obj[report] = el[index]
        }
        if (report.replace(/ /g,"") === subject) {
          obj.subject = subject;
          obj.points = el[index];
        }
      })
      result.push(obj)
    }
  })
  console.log(result);
}

// TEST CASE
console.log("SOAL 2");
viewScores(data, "quiz-1")
viewScores(data, "quiz-2")
viewScores(data, "quiz-3")
console.log("");

/*==========================================
  3. SOAL Recap Score (15 Poin + 5 Poin ES6)
  ==========================================
    Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
    Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
    predikat kelulusan ditentukan dari aturan berikut:
    nilai > 70 "participant"
    nilai > 80 "graduate"
    nilai > 90 "honour"

    output:
    1. Email: abduh@mail.com
    Rata-rata: 85.7
    Predikat: graduate

    2. Email: khairun@mail.com
    Rata-rata: 89.3
    Predikat: graduate

    3. Email: bondra@mail.com
    Rata-rata: 74.3
    Predikat: participant

    4. Email: regi@mail.com
    Rata-rata: 91
    Predikat: honour

*/

function recapScores(data) {
  data.forEach((el, i) => {
    if (i !== 0) {
      let nilai = el.slice(1);
      let length = nilai.length;
      let predikat = "";
      nilai = nilai.reduce((total, num) => total + num);
      nilai = nilai / length;
      if (nilai > 70) {
        predikat = "participant";
      } else if (nilai > 80) {
        predikat = "graduate";
      } else if (nilai > 90) {
        predikat = "honour";
      }
      console.log(`${i}. Email: ${el[0]}
Rata-rata: ${nilai.toFixed(1)}
Predikat: ${predikat}
      `)
    }
  })
}

console.log("SOAL 3");
recapScores(data);