// GP & Recursion Ended
// Description

// Now that you have learnt about geometric progression in Masai School pre-course, we hope you remember about the sum of a geometric series:

// Assume, you are given

// S = 1 + (1/r) + (1/r^2) + (1/r^3) +... (1/r^n);

// You will be given two integers n and r

// Your task is to calculate the sum S by writing a recursive function

// Using iterative approach or formula to calculate the sum can lead to disqualification directly
// you have to find square sum of all the ele from 1 to r
var n = 8;
var sum =0;
var r =2;
for(var i =0;i<=n;i++){
sum =sum+(1/(r**i));
}
console.log(sum);
var i =0;
var sum =0;
var r =2
function rec (i,sum){
    if(i>n){
        return sum;
    }
 sum=sum+(1/(r**i))
  return rec(i+1,sum);

}
console.log(rec (i,sum).toFixed(4));

