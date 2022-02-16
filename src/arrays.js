const getNthElement = (index, array) => {
  // your code here
  if (index < array.length){
    return array[index];
  }  else
  {
    return array[index - array.length];
  }
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
};

const numbersToStrings = numbers => {
  // your code here
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
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
