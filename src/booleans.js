function negate(a) {
  // your code here
  return !a;
};

function both(a, b) {
  // your code here
  return a && b;
};

function either(a, b) {
  // your code here
  return a || b;
};

function none(a, b) {
  // your code here
  return !(a || b);
};

function one(a, b) {
  // your code here
  return a != b;
};

function truthiness(a) {
  // your code here
  if (a) {
    return true;
  }
  return false;
};

function isEqual(a, b) {
  // your code here
  if (a === b) {
    return (true); 
  } 
  return (false);
};

function isGreaterThan(a, b) {
  // your code here
  if (a > b) {
    return true; 
  }
  return false;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  if (a <= b) {
    return true; 
  }
  return false;
};

function isOdd(a) {
  // your code here
  if (a % 2 === 1) {
    return true; 
  }
  return false;
};

function isEven(a) {
  // your code here
  if (a % 2 === 0) {
    return true; 
  } 
  return false;
};

function isSquare(a) {
  // your code here
  if (Number.isInteger(Math.sqrt(a))) {
    return true; 
  }
  return false;
};

function startsWith(char, string) {
  // your code here
  if (string.charAt(0) === char) {
    return true; 
  }
  return false;
};

function containsVowels(string) {
  //your code here
  if (string.includes('a') || string.includes('A') || 
      string.includes('e') || string.includes('E') ||
       string.includes('i') || string.includes('I') ||
        string.includes('o') || string.includes('O') ||
         string.includes('u') || string.includes('U') )
  {
    return true;
  }
  return false;

  // for (let i=0; i<string.length; i+=1) {
  //   let char = string.charAt(i);
  //     if (char === 'a' || char ==='A' || char ==='e' || char ==='E' || char ==='i' || char ==='I' || char ==='o' || char ==='O' || char ==='u' || char ==='U' ) {
  //     return true;
  //   } 
  // }
  // return false;
};

function isLowerCase(string) {
  // your code here
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
