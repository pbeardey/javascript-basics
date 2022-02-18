const getNthElement = (index, array) => {
  // your code here
  return array[index%array.length];
};

const arrayToCSVString = array => {
  // your code here
  const string = array.join();
  return string;
};

const csvStringToArray = string => {
  // your code here
  const myArray = string.split(",");
  return myArray;
};

const addToArray = (element, array) => {
  // your code here
  const addToArray = array.push(element);
  //return array;
};

const addToArray2 = (element, array) => {
  // your code here
  let myArray = [];
  myArray = array.concat(element);
  return myArray;
};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index,1);
};

const numbersToStrings = numbers => {
  // your code here
  const tempArray = numbers.map( number => number.toString() );
  return tempArray;
};

const uppercaseWordsInArray = strings => {
  // your code here
  const tempArray = strings.map ( string => string.toUpperCase() );
  return tempArray;
};

const reverseWordsInArray = strings => {
  // your code here
  const tempArray = strings.map ( (string) => {
    string = ((string.split('')).reverse()).join('');
    return string;
  } );
  return tempArray;
};

const onlyEven = numbers => {
  // your code here
  const tempArray = numbers.filter( (number) => {if (number%2===0) {return this}} );
  return tempArray;
};

const removeNthElement2 = (index, array) => {
  // your code here
  const tempArray = array.filter( (element, ix)=> { 
    if (ix!=index){
      return element;
    }
} )
  return tempArray;
};

const elementsStartingWithAVowel = strings => {
  // your code here

  const tempArray = strings.filter( (element) => {
    const char = element.charAt(0);
    if (char === 'a' || char ==='A' || char ==='e' || char ==='E' || char ==='i' || char ==='I' || char ==='o' || char ==='O' || char ==='u' || char ==='U' ) {
      return element;
    }
  } )
  return tempArray;
};

const removeSpaces = string => {
  // your code here
  string = (string.split(' ')).join('');
  return string;
};

const sumNumbers = numbers => {
  // your code here
  const total = numbers.reduce((prevTotal, currentNumber)=>{ return prevTotal + currentNumber},0 );
  return total;
};

const sortByLastLetter = strings => {
  // your code here
  strings = reverseWordsInArray((reverseWordsInArray(strings)).sort());
 return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
