function palindrome(str) {
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    newStr === str ? console.log(true) : console.log(false);
    console.log(newStr);
}
palindrome("abba");
palindrome("leon");
