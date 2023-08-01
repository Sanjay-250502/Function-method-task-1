 // Example 1:- (Function)
 // print the odd numbers in an array
 var arr = [1,2,3,4,5,6,7,8,9,];
 var result = [];
 function odd(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
 }
 console.log(odd(arr));                  //OUTPUT: [1,3,5,7,9]


 //Example 2:- anonymous method
 //convert all the strings to title caps in a string array
 const toTitleCase = function(str) {
 let result = '';
 let capitalizeNext = true;
  
 for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (capitalizeNext && char !== ' ') {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char.toLowerCase();
      }
  
      capitalizeNext = char === ' ';
    }
  
    return result;
  };
  const inputString = 'hello world this is my first task';
  const titleCasedString = toTitleCase(inputString);
  
  console.log(titleCasedString);          // Output: "Hello World This Is My First Task"
 
  
 //Example:-3 (IIFE method)
 //sum of all numbers in an array
 let arraySum = (function() {
    return function(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
          sum += arr[i];
        }
      }
      return sum;
    };
  })();
 let numbersArray = [10,20,30,40,50];
 let answer = arraySum(numbersArray);  
 console.log(answer);                    //OUTPUT: 150

 //Example:-4 (arrow function)
 //Return all the palindromes in an array
 const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
 };
  
 const findPalindromesInArray = arr => arr.filter(item => isPalindrome(item));  
 const inputArray = ['madam', 'hello', 'level', 'javascript', 'radar', 'examples', 'civic', 'world', 'rotator'];
 const palindromesArray = findPalindromesInArray(inputArray);
 console.log(palindromesArray);          
                                       // OUTPUT: ['madam', 'level', 'radar', 'civic', 'rotator']
 

 
 //Example 1:- //IIFE (Immediately Invoked Function Expression)
 //Print the odd numbers in an array
 (function odd(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    console.log(result);
   })([11,12,13,14,15,16,17,18,19]);      //OUTPUT: [11,13,15,17,19]