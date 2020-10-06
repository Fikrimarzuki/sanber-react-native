// MENGUBAH FUNGSI MENJADI FUNGSI ARROW
const golden = () => {
  console.log("this is golden!");
};

console.log("SOAL 1");
golden();


// SEDERHANAKAN MENJADI OBJECT LITERAL ES6
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullname: () => {
      console.log(`${firstName} ${lastName}`);
      return
    }
  }
}

console.log("\nSOAL 2");
newFunction("William", "Imoh").fullname();


// DESTRUCTURING

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

console.log("\nSOAL 3");
const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation, spell);


// ARRAY SPREADING

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [ ...west, ...east ]
//Driver Code
console.log("\nSOAL 4");
console.log(combined);


// TEMPLATE LITERALS

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
`

// Driver Code
console.log("\nSOAL 5");
console.log(before);
