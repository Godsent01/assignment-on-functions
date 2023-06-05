// question 1
// Create a function that will be able to convert figures from Fahrenheit to Celsius.
function fahrenheitToCelsius(fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

var temperatureFahrenheit = 77;
var temperatureCelsius = fahrenheitToCelsius(temperatureFahrenheit);
console.log('question 1: temperatureCelsius', temperatureCelsius);

// question 2
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

var numbers = [2, 4, 6, 8, 10];
var average = calculateAverage(numbers);
console.log('question 2: average', average);

// question 3
// Create a function that checks if a number, n is divisible by two
// numbers x and y. All inputs are positive, non-zero digits

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
console.log('question 3:')
console.log(' is Divisible', isDivisible(12, 3, 4));
console.log(' is Divisible', isDivisible(10, 3, 4));
console.log(' is Divisible', isDivisible(15, 5, 3));

// question 4
// Create a function that will output the first 100 prime numbers.
function generatePrimes(n) {
  var primes = [];
  var num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

function isPrime(num) {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

var primeNumbers = generatePrimes(100);
console.log('question 4: primeNumbers', primeNumbers);

// question 5
// Create a function that receives an array of numbers of
// diverse numbers and returns an array containing only positive numbers.

function getPositiveNumbers(numbers) {
  var positiveNumbers = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }

  return positiveNumbers;
}

var numbers = [-2, 3, -5, 0, 8, -10, 7];
var positiveArray = getPositiveNumbers(numbers);
console.log('question 5: positiveArray', positiveArray);

// question 6
// Write a program that prints the numbers from 1 to 100. But for multiples
// of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz".
// For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

console.log("question 6")
fizzBuzz();

// question 7
// The marketing team is spending way too much time typing in hashtags.
// Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria;
// It must start with a hash symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized.
// If the final result is going to be longer than 140 characters, it should return false.
// If the input or result is an empty string, it should return false.

function generateHashtag(input) {
  // Check if the input is empty or if it becomes an empty string after removing spaces
  if (!input || input.trim().length === 0) {
    return false;
  }

  // Remove spaces and split the input into an array of words
  var words = input.trim().split(' ');

  // Capitalize the first letter of each word and join them together
  var hashtag = words
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');

  // Add the hash symbol at the beginning of the hashtag
  hashtag = '#' + hashtag;

  // Check if the final hashtag exceeds 140 characters
  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}
console.log('question 7:')
console.log('generatedHastags', generateHashtag('Hello world'));
console.log('generatedHastags', generateHashtag('this is a long sentence'));
console.log('generatedHastags', generateHashtag(''));
console.log('generatedHastags', generateHashtag(' '.repeat(141)));
