// Progression #1: Greatest of the two numbers
function greaterOfTwoNumbers(num1, num2) {
  if (num1 > num2)
    return num1
  else if (num1 < num2)
    return num2
  else
    return num1
}


function maxOfTwoNumbers() {

}


// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
/*  var lengthyword = 0;
  if(words.length==0)
  {
    return null;
  }
  else if(words.length==1){
    return words;
  }
  else {
  for(var i=0;i<words.length;i++){
    if(words[i].length>lengthyword)
    {
      lengthyword = words[i];
    }
  }
  return lengthyword;
}*/
var len = 0
  for (var i = 0; i < words.length; i++) {
    if (len < words[i].length)
      len = words[i].length
  }
  for (var i = 0; i < words.length; i++) {
    if (len == words[i].length)
      return words[i]
  }
  return null
}


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  var sum = 0
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

//Progression #3.1 (Bonus): A generic `sum()` function
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function add(mixedArr) {
  var res = 0
  for (var i = 0; i < mixedArr.length; i++) {
    if (typeof (mixedArr[i]) == 'number')
      res += mixedArr[i]
    else if (typeof (mixedArr[i]) == 'string')
      res += mixedArr[i].length
    else if (typeof (mixedArr[i]) == 'boolean')
      res += mixedArr[i]
    else
      throw Error("Unsupported data type (object or array)");

  }
  return res
}



// Progression #4: Calculate the average

// Progression 4.1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbers) {
  if (numbers.length == 0)
    return null
  var res = netPrice(numbers)
  return res / (numbers.length)
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordArr) {
  if (wordArr.length == 0)
    return null
  var res = add(wordArr)
  return Number((res / wordArr.length))
}

//Progression #4.3 : (Bonus)

function avg(wordArr) {
  if (wordArr.length == 0)
    return null
  var res = add(wordArr)
  return Number((res / wordArr.length).toFixed(2))
}


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniquifyArray(wordsUnique) {
  if (wordsUnique.length == 0)
    return null
  else {
    var newArry = []
    for (var i = 0; index < wordsUnique.length; i++) {
      if (!(isThere(wordsUnique[i], newArry))) newArry.push(wordsUnique[i])
    }
    return newArry
  }

}

function isThere(word, newArray) {
  for (var i = 0; i < newArray.length; i++) {
    if (word == newArray[i])
      return 1
  }
  return 0
}


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, target) {
  if (wordsFind.length == 0)
    return null
  if (isThere(target, wordsFind))
    return true
  else false
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function countNumberOf(word, newArray) {
  var count = 0
  for (var index = 0; index < newArray.length; index++) {
    if (word == newArray[index])
      count++
  }
  return count
}


function howManyTimesElementRepeated(wordCount, target) {
  if (wordCount.length == 0)
    return 0
  var res = 0
  res = countNumberOf(target, wordCount)
  return res
}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {
  var temp = 1,
    res = 0
  for (var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    temp = 1
    for (var colIndex = 0; colIndex < matrix.length; colIndex++) {
      temp *= matrix[rowIndex][colIndex]
    }
    if (res < temp)
      res = temp
  }
  temp = 1
  for (var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    temp = 1
    for (var colIndex = 0; colIndex < matrix.length; colIndex++) {
      temp *= matrix[colIndex][rowIndex]
    }
    if (res < temp)
      res = temp
  }
  return Math.trunc(res)
}