
function repeatingString( s, n, k)
{
    // if length of string is
    // not divisible by K
    if (n % k != 0) {
        return false;
    }
     
    // Frequency Array
    var frequency = new Array(123);
   
     
    // Initially frequency of each
    // character is 0
    for (let i = 0; i < 123; i++) {
        frequency[i] = 0;
       
    }
     
    // Computing the frequency of
    // each character in the string
    for (let i = 0; i < n; i++) {
        frequency[s[i]]++;
    }
 console.log(frequency);
    var repeat = n / k;
     
    // Loop to check that frequency of
    // every character of the string
    // is divisible by K
    for (let i = 0; i < 123; i++) {
 
        if (frequency[i] % repeat != 0) {
            return false;
        }
    }
 
    return true;
}
 
// Driver Code
 
var s = "aabcbc";
var n = s.length;
var k = 3;
 
if (repeatingString(s, n, k)) {
    console.log("Yes");
}
else {
    console.log("No" );
}