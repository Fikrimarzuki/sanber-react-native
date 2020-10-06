Tugas 7 – ES6
Pada tugas kali ini buatlah folder baru (Tugas 7 – ES6) yang berisikan file dengan nama es6.js . Simpan folder tugas ini di dalam folder repository project yang dikerjakan pada Tugas 1.

Petunjuk

Ubahlah Code berikut dari ES5 ke ES6:

1. Mengubah fungsi menjadi fungsi arrow
const golden = function goldenFunction(){
  console.log("this is golden!!")
}
 
golden()
2. Sederhanakan menjadi Object literal di ES6
return dalam fungsi di bawah ini masih menggunakan object literal dalam ES5, ubahlah menjadi bentuk yang lebih sederhana di ES6.

const newFunction = function literal(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName() 
3. Destructuring
Diberikan sebuah objek sebagai berikut:

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:

const firstName = newObject.firstName;
const lastName = newObject.lastName;
const destination = newObject.destination;
const occupation = newObject.occupation;
Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)

// Driver code
console.log(firstName, lastName, destination, occupation)
4. Array Spreading
Kombinasikan dua array berikut menggunakan array spreading ES6

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = west.concat(east)
//Driver Code
console.log(combined)
5. Template Literals
sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:

const planet = "earth"
const view = "glass"
var before = 'Lorem ' + view + 'dolor sit amet, ' +  
    'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +
    'incididunt ut labore et dolore magna aliqua. Ut enim' +
    ' ad minim veniam'
 
// Driver Code
console.log(before) 
Jika sudah selesai dikerjakan, silahkan push hasil pekerjaan Anda ke repository Gitlab masing-masing (gunakan repository project yang sama IMRN0920 yang digunakan folder Tugas 7). Jangan lupa submit link commit Anda ke sanbercode.com.

Updated on Oktober 1, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-2-assignments/assignment-5-es6/