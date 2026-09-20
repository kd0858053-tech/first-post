function getResult(marks, passMark = 40) {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= passMark) {
    return "C";
  } else {
    return "F";
  }
}

// Test
console.log(getResult(72));      // B
console.log(getResult(85));      // A
console.log(getResult(45));      // C
console.log(getResult(30));      // F
console.log(getResult(35, 30));  // C - passMark changed