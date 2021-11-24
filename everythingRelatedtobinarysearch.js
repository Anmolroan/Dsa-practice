function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let N =+input[0];
   let arr=input[1].trim().split(" ").map(Number);
   let k=+input[2];
   everthing(N,k,arr)
  }
function everthing(N,k,arr){
    var i=0;
      var j=N-1;
 
    
var lowerbound=-1;
while(i<=j){
  if(i==j){
    break;
  }
var mid=i+Math.floor((j-i)/2)


 if(arr[mid]>=k){
   if(arr[mid]===k){
    lowerbound=mid;
   }
    j=mid;
}
else if(arr[mid]<k){
    i= mid+1;
}
}
// console.log(lowerbound)
var i=0;
var j=N-1;

var upperbound=-1;
while(i<=j){
if(i==j){
break;
}
var mid=i+Math.floor((j-i)/2)


if(arr[mid]<=k){
if(arr[mid]===k){
upperbound=mid;
}
i=mid;
}
else if(arr[mid]>k){
j=mid-1;
}
}
// console.log(upperbound)
let occurence=upperbound-lowerbound+1;
if(lowerbound==-1){
    console.log(lowerbound +" "+upperbound+" "+0)
}
else{
    console.log(lowerbound +" "+upperbound+" "+occurence)
}
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`6
    1 1 1 2 2 2	
    1`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }