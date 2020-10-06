function palindrome(string) {
  let word = "";
  for(let i = string.length - 1; i >= 0; i--) {
    word += string[i]
  }
  if (word === string) {
    return true
  }
  return false
}

console.log("PALINDROME");
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("haji ijah")); // true
console.log(palindrome("nabasan")); // false
console.log(palindrome("nababan")); // true


function DescendingTen(number) {
  let result = "";
  if (number) {
    for (let i = number; i > number - 10; i--) {
      result += i + " ";
    }
    return result
  } else {
    return -1
  }
}

console.log("\nDESCENDING TEN")
console.log(DescendingTen(10)) // 10 9 8 7 6 5 4 3 2 1
console.log(DescendingTen(20)) // 20 19 18 17 16 15 14 13 12 11
console.log(DescendingTen()) // -1


function balikString(string) {
  let word = "";
  for (let i = string.length - 1; i >= 0; i--) {
    word += string[i]
  }
  return word
}

console.log("\nBALIK STRING")
console.log(balikString("abcde")) // edcba
console.log(balikString("rusak")) // kasur
console.log(balikString("racecar")) // racecar
console.log(balikString("haji")) // ijah


function ularTangga() {
  let row = 10;
  let col = 10;
  let num = 100;
  let board = "";
  for (let i = 0; i < row; i++) {
    if (i % 2 === 1) num -= 9;
    for (let j = 0; j < col; j++) {
      board += num + " ";
      if (i % 2 === 0) num--;
      else num++;

      if (j === (col-1)) {
        board += "\n";
        if (i % 2 === 1) num -= 11;
      }
    }
  }
  return board;
}

console.log("\nULAR TANGGA");
console.log(ularTangga());
/* Output: 
100 99 98 97 96 95 94 93 92 91
81 82 83 84 85 86 87 88 89 90
80 79 78 77 76 75 74 73 72 71
61 62 63 64 65 66 67 68 69 70
60 59 58 57 56 55 54 53 52 51
41 42 43 44 45 46 47 48 49 50
40 39 38 37 36 35 34 33 32 31
21 22 23 24 25 26 27 28 29 30
20 19 18 17 16 15 14 13 12 11
1 2 3 4 5 6 7 8 9 10
*/