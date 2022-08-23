// Objects in JavaScript are collections of key/value pairs. The values can consist of properties and methods, and may contain all other JavaScript data types, such as strings, numbers, and Booleans.
// ALL OBJECT METHODS
// 1.  *********************** Object.create()  ***********************
// The Object.create() method is used to create a new object and link it to the prototype of an existing object.
// Initialize an object with properties and methods

const job = {
  position: 'cashier',
  type: 'hourly',
  isAvailable: true,
  showDetails() {
    const accepting = this.isAvailable
      ? 'is accepting applications'
      : 'is not currently accepting applications';

    console.log(
      `The ${this.position} position is ${this.type} and ${accepting}.`,
    );
  },
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = 'barista';
// barista.showDetails(); The barista position is hourly and is accepting applications.

// The barista object now has one property — position — but all the other properties and methods from job are available through the prototype. Object.create() is useful for keeping code DRY by minimizing duplication.

// 2.  *********************** Object.keys()  ***********************

// Object.keys() creates an array containing the keys of an object.
const employees = {
  boss: 'Michael',
  secretary: 'Pam',
  sales: 'Jim',
  accountant: 'Oscar',
};

// Get the keys of the object
const keys = Object.keys(employees);

// console.log(keys);  ["boss", "secretary", "sales", "accountant"]
// As Object.keys converts your object’s keys into an array of keys, the forEach() array method can be used to iterate through the keys and values.

// 3. ***********************  Object.values()  ***********************
// Object.values() creates an array containing the values of an object.
const session = {
  id: 1,
  time: `26-July-2018`,
  device: 'mobile',
  browser: 'Chrome',
};

// Get all values of the object
const values = Object.values(session);
// console.log(values);  [1, "26-July-2018", "mobile", "Chrome"]

// 4. ***********************  Object.entries()  ***********************
// Object.entries() creates a nested array of the key/value pairs of an object.
// Initialize an object
const operatingSystem = {
  name: 'Ubuntu',
  version: 18.04,
  license: 'Open Source',
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

// console.log(entries);
// [
//     ["name", "Ubuntu"]
//     ["version", 18.04]
//     ["license", "Open Source"]
// ]
// The Object.entries() method will only return the object instance’s own properties, and not any properties that may be inherited through its prototype.

// 5. ***********************  Object.assign()  ***********************

// Object.assign() is used to copy values from one object to another.
// We can create two objects, and merge them with Object.assign()

const name = {
  firstName: 'Philip',
  lastName: 'Fry',
};

// Initialize another object
const details = {
  job: 'Delivery Boy',
  employer: 'Planet Express',
};

// Merge the objects
const character = Object.assign(name, details);

// console.log(character);  {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
// It is also possible to use the spread operator (...) to accomplish the same task. In the code below, we’ll modify how we declare character through merging the name and details objects.

const name1 = {
  firstName: 'Philip',
  lastName: 'Fry',
};

// Initialize another object
const details1 = {
  job: 'Delivery Boy',
  employer: 'Planet Express',
};

// Merge the object with the spread operator
const character1 = {...name1, ...details1};
// console.log(character1);  {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

// 6. ***********************  Object.freeze()  ***********************

// Object.freeze() prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.
const user = {
  username: 'AzureDiamond',
  password: 'hunter2',
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

// console.log(newUser);  {username: "AzureDiamond", password: "hunter2"}

// In the example above, we tried to override the password hunter2 with *******, but the password property remained the same. We also tried to add a new property, active, but it was not added.
// Object.isFrozen() is available to determine whether an object has been frozen or not, and returns a Boolean.

// 7. ***********************  Object.seal()  ***********************

// Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties. This method is similar to Object.freeze(). Refresh your console before implementing the code below to avoid an error.

const user1 = {
  username: 'AzureDiamond',
  password: 'hunter2',
};

// Seal the object
const newUser = Object.seal(user1);

newUser.password = '*******';
newUser.active = true;

// console.log(newUser);  {username: "AzureDiamond", password: "*******"}

// 7. ***********************  Object.getPrototypeOf()  ***********************

// Object.getPrototypeOf() is used to get the internal hidden [[Prototype]] of an object, also accessible through the __proto__ property.

const employees1 = ['Ron', 'April', 'Andy', 'Leslie'];

// Object.getPrototypeOf(employees1);  //   [constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]
// We can see in the output that the prototype of the employees array has access to pop, find, and other Array prototype methods. We can confirm this by testing the employees prototype against Array.prototype.
Object.getPrototypeOf(employees1) === Array.prototype; // true

// For…In Loop

// The for...in statement iterates over the properties of an object. To demonstrate, we will make a simple shark object with a few name:value pairs.
const shark = {
  species: 'great white',
  color: 'white',
  numberOfTeeth: Infinity,
};
for (attribute in shark) {
  console.log(attribute); // species color numberOfTeeth
}
// We can also access the values of each property by using the property name as the index value of the object.
for (attribute in shark) {
  console.log(shark[attribute]); //  great white whiteInfinity
}

// For…Of Loop
// The for...in statement is useful for iterating over object properties, but to iterate over iterable objects like arrays and strings, we can use the for...of statement.
let sharks = ['great white', 'tiger', 'hammerhead'];

// Print out each type of shark
for (let shark of sharks) {
  console.log(shark); //  great white  tiger hammerhead
}
// It is also possible to print out the index associated with the index elements using the entries() method.
for (let [index, shark] of sharks.entries()) {
  console.log(index, shark);
}

// Output
// 0 'great white'
// 1 'tiger'
// 2 'hammerhead'

const dummyObject = {
  user: {
    isLoggedIn: true,
    userName: 'Bhardwaj',
    avatar: 'shivangi',
    favourites: ['E-Commerce', 'JavaScript', 'React-native'],
  },
  topResults: {
    amount: 0007,
    scores: [120, 100, 80],
  },
};

const d = {
  ...dummyObject,
  ['user']: {
    ...dummyObject['user'],
    isLoggedIn: false,
  },
};
// console.log(d);
// {
//     user: {
//       isLoggedIn: false,
//       userName: 'Bhardwaj',
//       avatar: 'shivangi',
//       favourites: [ 'E-Commerce', 'JavaScript', 'React-native' ]
//     },
//     topResults: { amount: 7, scores: [ 120, 100, 80 ] }
//   }

const changeUserNameAndTopResultsAmount = {
  ...dummyObject,
  ['user']: {
    ...dummyObject['user'],
    userName: 'shivangi',
  },
  ['topResults']: {
    ...dummyObject['topResults'],
    amount: 8,
  },
};

// console.log(changeUserNameAndTopResultsAmount);
// {
//     user: {
//       isLoggedIn: true,
//       userName: 'shivangi',
//       avatar: 'shivangi',
//       favourites: [ 'E-Commerce', 'JavaScript', 'React-native' ]
//     },
//     topResults: { amount: 8, scores: [ 120, 100, 80 ] }
//   }

const AddScoresToScores = {
  ...dummyObject,
  ['topResults']: {
    ...dummyObject['topResults'],
    scores: [...dummyObject['topResults']['scores'], 60],
  },
};
// console.log(AddScoresToScores);
// {
//     user: {
//       isLoggedIn: true,
//       userName: 'Bhardwaj',
//       avatar: 'shivangi',
//       favourites: [ 'E-Commerce', 'JavaScript', 'React-native' ]
//     },
//     topResults: { amount: 7, scores: [ 120, 100, 80, 60 ] }
//   }

const allFavs = [...dummyObject['user']['favourites']];
const indexOfReactNative = allFavs.findIndex(
  element => element == 'React-native',
);
allFavs.splice(indexOfReactNative, 1);
const deleteScoreAndRemoveReactNative = {
  ...dummyObject,
  ['user']: {
    ...dummyObject['user'],
    favourites: allFavs,
  },
  ['topResults']: {
    ...dummyObject['topResults'],
    scores: [],
  },
};
// console.log(deleteScoreAndRemoveReactNative);
// {
//     user: {
//       isLoggedIn: true,
//       userName: 'Bhardwaj',
//       avatar: 'shivangi',
//       favourites: [ 'E-Commerce', 'JavaScript' ]
//     },
//     topResults: { amount: 7, scores: [] }
//   }

const AddInfoToDummyObject = {
  ...dummyObject,
  ['newCrush']: {
    name: 'Pooja Tripathi',
    age: 36,
    job: 'HR',
  },
};
// console.log(AddInfoToDummyObject);
// {
//     user: {
//       isLoggedIn: true,
//       userName: 'Bhardwaj',
//       avatar: 'shivangi',
//       favourites: [ 'E-Commerce', 'JavaScript', 'React-native' ]
//     },
//     topResults: { amount: 7, scores: [ 120, 100, 80 ] },
//     newCrush: { name: 'Pooja Tripathi', age: 36, job: 'HR' }
//   }
const deleteTopResults = {
  ...dummyObject,
};
delete deleteTopResults['topResults'];
//   console.log(deleteTopResults);
//   {
//     user: {
//       isLoggedIn: true,
//       userName: 'Bhardwaj',
//       avatar: 'shivangi',
//       favourites: [ 'E-Commerce', 'JavaScript', 'React-native' ]
//     }
//   }

// 1.GET UNIQUE ELEMENTS FROM OBJECT OF ARRAYS

const newArray = [
  {name: 'bhardwaj', live: 'delhi', age: 28},
  {name: 'gaur', live: 'gurgaon', age: 45},
  {name: 'pooja', live: 'england', age: 28},
  {name: 'yadav', live: 'canada', age: 21},
  {name: 'ram', live: 'england', age: 19},
  {name: 'bhardwaj', live: 'gurgaon', age: 16},
  {name: 'ram', live: 'canada', age: 19},
  {name: 'gaur', live: 'gurgaon', age: 28},
  {name: 'tripathi', live: 'delhi', age: 16},
];

const unique = Array.from(new Set(newArray.map(val => val.name)));
// console.log(unique); //[ 'bhardwaj', 'gaur', 'pooja', 'yadav', 'ram', 'tripathi' ]

const unique2 = newArray.filter(
  (elem, index, array) =>
    newArray.findIndex(obj => obj.name == elem.name) === index,
);
// console.log(unique2);
// [
//     { name: 'bhardwaj', live: 'delhi', age: 28 },
//     { name: 'gaur', live: 'gurgaon', age: 45 },
//     { name: 'pooja', live: 'england', age: 28 },
//     { name: 'yadav', live: 'canada', age: 21 },
//     { name: 'ram', live: 'england', age: 19 },
//     { name: 'tripathi', live: 'delhi', age: 16 }
//   ]

const unique3 = [...new Set(newArray.map(item => item.name))];
// console.log(unique3)  //[ 'bhardwaj', 'gaur', 'pooja', 'yadav', 'ram', 'tripathi' ]

const key = 'live';

const unique4 = [...new Map(newArray.map(item => [item[key], item])).values()];

// console.log(unique4);
// [
//     { name: 'tripathi', live: 'delhi', age: 16 },
//     { name: 'gaur', live: 'gurgaon', age: 28 },
//     { name: 'ram', live: 'england', age: 19 },
//     { name: 'ram', live: 'canada', age: 19 }
//   ]

function uniq(array, field) {
  return array.reduce((accumulator, current) => {
    if (!accumulator.includes(current[field])) {
      accumulator.push(current[field]);
    }
    return accumulator;
  }, []);
}

const unique5 = uniq(newArray, 'name');
// console.log(unique5)  //[ 'bhardwaj', 'gaur', 'pooja', 'yadav', 'ram', 'tripathi' ]

let data = new Map();

for (let obj of newArray) {
  data.set(obj.name, obj);
}

let unique6 = [...data.values()];

// console.log(unique6);
// [
//     { name: 'bhardwaj', live: 'gurgaon', age: 16 },
//     { name: 'gaur', live: 'gurgaon', age: 28 },
//     { name: 'pooja', live: 'england', age: 28 },
//     { name: 'yadav', live: 'canada', age: 21 },
//     { name: 'ram', live: 'canada', age: 19 },
//     { name: 'tripathi', live: 'delhi', age: 16 }
//   ]

// console.log(Object.keys(newArray.reduce((r,{name}) => (r[name]='', r) , {})))
//   [ 'bhardwaj', 'gaur', 'pooja', 'yadav', 'ram', 'tripathi' ]

Array.prototype.contains = function (v) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function () {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

var duplicates = [1, 3, 4, 2, 1, 2, 3, 8];
var uniques = duplicates.unique(); // result = [1,3,4,2,8]

const duplicateUnique = duplicates.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  [],
);

//  *******************************
const getUniqueUsingSet = [...new Set(newArray.map(x => x.name))];
// console.log(getUniqueUsingSet); //[ 'bhardwaj', 'gaur', 'pooja', 'yadav', 'ram', 'tripathi' ]

// MAKE READABLE AND LOOPABLE ARRAY FROM AN OBJECT

const myObject = {
  name: 'bhardwaj',
  live: 'gurgaon',
};

// STEP_1
const DATA = Object.entries(myObject).map(item => {
  return {
    key: item[0],
    values: item[1],
  };
});

// console.log(DATA);
// [
//   { key: 'name', values: 'bhardwaj' },
//   { key: 'live', values: 'gurgaon' }
// ]

// STEP_2
const DATA2 = Object.entries(myObject || {}).map(([key, value]) => {
  return {
    key: key,
    value: value,
  };
});
//  console.log(DATA2);
//  [
//   { key: 'name', value: 'bhardwaj' },
//   { key: 'live', value: 'gurgaon' }
// ]

// GET NUMERIC VALUES FROM STRING
const stringWithNumbers = 'bhard86waj 28 October 1998';
var numbersInString = stringWithNumbers.match(/\d+/g).map(Number);
// console.log(numbersInString); //[ 86, 28, 1998 ]

// CREATE TITLE CASE
const titleCase = str =>
  str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

// console.log(titleCase("the quick brown fox")); //The Quick Brown Fox

// REMOVE FALSY VALUES FROM AN ARRAY

const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
// [1, 2, 3, 'a', 's', 34]

// MERGE TWO OBJECTS
const merge = (...objects) => ({...objects});
const obj1 = {date: '12', name: 'bhardwaj'};
const obj2 = {date: '23', name: 'gaur'};
const obj3 = merge({...obj1});
// console.log(obj3); //{ '0': { date: '12', name: 'bhardwaj' } }
