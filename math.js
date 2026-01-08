
//Countdigits of a number

function countDigit(n) {
  if (n === 0) return 1;
  let count = 0;
  n = Math.abs(n);
  while (n){
    n = Math.floor(n / 10);
    count++
  }
  return count;
}
console.log(countDigit(123456));

///////////////////////////////////////////////

//Reverse a number

function reverseNuber (num){
  let reversed = 0;
  let n = Math.abs(num);

  while (n > 0){
    reversed = (reversed * 10) + (n % 10);
    n = Math.floor(n / 10);
  }
  return num < 0 ? -reversed : reversed;
}
console.log(reverseNuber(12345));

///////////////////////////////////////////

//Check number is palindrome

function isPalindrome(num) {
    if (num < 0) return false; 
    
    let original = num;
    let reversed = 0;
    
    while (num > 0) {
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    
    return original === reversed;
}

console.log(isPalindrome(121));  
console.log(isPalindrome(123));  

