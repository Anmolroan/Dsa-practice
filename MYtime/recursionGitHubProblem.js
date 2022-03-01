// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21;
// function sumBelow(n){
//     if(n===0){
//         return 0;
//     }
//    return n-1+sumBelow(n-1)
// }
// console.log(sumBelow(7))


// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
// var Array=[];
// function findRange(i,j){
//     if(i===j-1){
//         return Array
//     }
//     Array.push(i+1)
//     return findRange(i+1,j)
// }
// console.log(findRange(2,9))

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// function exponent(n,j){
//     if(j===1){
//         return n
//     }
//     return n*exponent(n,j-1)
// }
// console.log(exponent(4,3))
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// check=(num,sum)=>{
//     if(sum>num){
//         return false;
//     }
//     if(sum==num){
//         return true
//     }
//     sum=sum*2;
//     return check(num,sum);
// }
// console.log(check(1,1))
// 10. Write a function that determines if a string is a palindrome.
// function pallindrome(str,left,right){
//     if(left===right){
//         return true;
//     }
//     if(left>right){
//         return true;
//     }
//     if(str[left]===str[right]){
//         return pallindrome(str,left+1,right-1)
//     }
//     else{
//         return false
//     }
// }
// var str="naman";
// console.log(pallindrome("namana",0,5))
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// function mod(n,m){
// if(n<m){
//     return n
// }

// return mod(n-m,m)
// }
// console.log(mod(22,6))
// 12. Write a function that multiplies two numbers without using the * operator or;
// function mult(x,y){
// if(y==0){
//     return 0
// }
// return x+mult(x,y-1);
// }
// console.log(mult(2,11))
// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// var count=0;
// function divide(x,y){
//     if(x==0){
//         return count;
//     }
//     if(x<y){
//         return count;
//     }
//     count++;
//     return divide(x-y,y)
// }
// divide(10,4);
// console.log(count)
// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// function gcd(x,y,n){
//   if(x%n==0&&y%n==0){
//       return n;
//   }
//   return gcd(x,y,n-1)
// }
// console.log(gcd(64,32,Math.min(64,32)))
// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
// function compare(x,y,i){
//   if(x.length!=y.length){
//       return false;
//   }
//   if(i==x.length-1){
// return true;
//   }
//   if(x[i]===y[i]){
//       return compare(x,y,i+1)
//   }
//   return false;
// }
// console.log(compare("mouse","house",0))
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// var array=[];

// function makeArray(str,i,Array){
// if(i==str.length){
//     return Array;
// }
// Array[i]=str[i];
// return makeArray(str,i+1,Array);
// }
// console.log(makeArray("house",0,array))
// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
// var array=[];
// fizbuzz=(i,n)=>{
//     if(i>n){
//         return array
//     }
//     if(i%3==0){
//         array.push("Fizz")
//     }
//     if(i%5==0){
//         array.push("Buzz")
//     }
//     else{
//         array.push(i)
//     }
//     return fizbuzz(i+1,n)
// }
// console.log(fizbuzz(1,5))
// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2;
// var total=0;
// count=(str,i,array)=>{
//     if(i==array.length){
//         return total;
//     }
//     if(array[i]==str){
//         total++;
        
//     }
//     return count(str,i+1,array)
// }
// console.log(count("banana",0,[2,'banana',4,4,1,'banana']))

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms;
// var array=[34,0,23,2,5,2];

// function swap(i,j,array){
//     var temp=array[i];
//     array[i]=array[j];
//     array[j]=temp;
// }
// function sort(i,j,array){
//     if(i===j){
//         i=0;
//         j=j-1;
//     }
//     if(j==0){
//         return array
        
//     }
//    if(array[i]>array[i+1]){
//        swap(i,i+1,array)
//    }
// return sort(i+1,j,array)
// }
// console.log(sort(0,5,array))
// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
// var array=[2,0,0,0,1,0,0,4]
// var arr=[];
// var count=0;
// min =(i,N)=>{
//     if(i==N){
//         return arr;
//     }
//     if(array[i]!=0){
//         arr.push(array[i]);
//         count=0;
//     }
//     if(array[i]==0&&count==0){
//         arr.push(array[i]);
//         count++;
//     }
//     return min(i+1,N)
// }
// console.log(min(0,array.length))
// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var array=[2,7,8,3,1,4]
function alternate(i){
    if(i===array.length){
        return array
    }
    if(i%2!=0){
        array[i]=-array[i]
    }
    return alternate(i+1)
}
console.log(alternate(0))