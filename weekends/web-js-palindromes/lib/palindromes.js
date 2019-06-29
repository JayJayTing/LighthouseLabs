function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");


  return s.split(' ').join('') == stringReverse.split(' ').join('');
}
console.log(isPalindrome("a man a plan a canal panama"));
module.exports = isPalindrome;
