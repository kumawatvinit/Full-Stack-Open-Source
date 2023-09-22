/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function clearInput(str) {
  let ans = '';

  for(let i=0; i<str.length; i++)
  {
    if(str[i] >= 'a' && str[i] <= 'z') ans+= str[i];
  }

  return ans;
}

function isPalindrome(str) {
  str = clearInput(str.toLowerCase());

  let start = 0, end = str.length-1;
  while(start < end) 
  {
    if(str[start] != str[end]) return false;

    start+= 1;
    end-= 1;
  }

  return true;
}

module.exports = isPalindrome;
