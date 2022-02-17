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
  for (let i=0; i<(array.length-1-index); i+=1){
    array[index+i] = array[index+i+1];
  }
  array.length = array.length-1;
};

const numbersToStrings = numbers => {
  // your code here
  for (let i=0; i<numbers.length; i+=1){
    numbers[i]=numbers[i].toString();
  }
  return numbers;
};

const uppercaseWordsInArray = strings => {
  // your code here
  for (let i=0; i<strings.length; i+=1){
    strings[i]=strings[i].toUpperCase();
  }
  return strings;

};

const reverseWordsInArray = strings => {
  // your code here
  for (let i=0; i<strings.length; i+=1){
    let tempArray=strings[i].split('');
    tempArray.reverse();
    strings[i]=tempArray.join('');
  }
  return strings;
};

const onlyEven = numbers => {
  // your code here
  let tempArray = [];
  for (let i=0; i<numbers.length; i+=1){
    if (numbers[i]%2===0) {
      tempArray.push(numbers[i]);
    }
  }
  return tempArray;

};

const removeNthElement2 = (index, array) => {
  // your code here
  let tempArray = [];
  for (let i=0; i<array.length; i+=1){
    if (i!=index) {
      tempArray.push(array[i]);
    }
  }
  return tempArray;

};

const elementsStartingWithAVowel = strings => {
  // your code here
  let tempArray = [];
  for (let i=0; i<strings.length; i+=1){
    const char=strings[i].charAt(0);
    if (char === 'a' || char ==='A' || char ==='e' || char ==='E' || char ==='i' || char ==='I' || char ==='o' || char ==='O' || char ==='u' || char ==='U' ) {
      tempArray.push(strings[i]);
    }
  }
  return tempArray;
};

const removeSpaces = string => {
  // your code here
  const strings = string.split(' ');
  let tempArray = [];
  for (let i=0; i<strings.length; i+=1){
      tempArray.push(strings[i]);
  }
  const text=tempArray.join('');
  return text;
};

const sumNumbers = numbers => {
  // your code here
  let total=0;
  for (let i=0; i<numbers.length; i+=1){
    total += numbers[i];
  }
  return total;
};

const sortByLastLetter = strings => {
  // your code here
  let tempArray = reverseWordsInArray(strings);
  tempArray.sort();
  strings = reverseWordsInArray(strings);
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
