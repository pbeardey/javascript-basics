const createPerson = (name, age) => {
  // your code here
  const person = {
    name: name,
    age: age
  };
  return person;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  if (object[property]){
    return true;
  }
  return false;
  
};

const isOver65 = person => {
  // your code here
  if (person.age>65) {
    return true;
  }
  return false;
};

const getAges = people => {
  // your code here
  let tempArray = [];
  for (i=0; i<people.length; i+=1){
    tempArray.push(people[i].age);
  }
  return tempArray;
};

const findByName = (name, people) => {
  // your code here
  for (i=0; i<people.length; i+=1){
    if (people[i].name === name){
      return people[i];
    }
  }
};

const findHondas = cars => {
  // your code here
  const hondas = [];
  for (i=0; i<cars.length; i+=1){
    if (cars[i].manufacturer==='Honda') {
      hondas.push(cars[i])
    }
  }
  return hondas;
};

const averageAge = people => {
  // your code here
  let totalAge = 0;
  for (i=0; i<people.length; i+=1){
    totalAge+=people[i].age;
  }
  return totalAge/people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  const talkingPerson = {
    name: name,
    age: age,
    introduce: function(friendName){
      return `Hi ${friendName}, my name is ${this.name} and I am ${this.age}!`
    }
  }
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
