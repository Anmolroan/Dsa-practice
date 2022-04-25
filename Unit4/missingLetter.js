function runProgram(input) {
  // Write code here
  input=input.trim().split('\n');
  let tc=+input[0];
  let line =1;
  for(let i =0;i<tc;i++){
      let arr =input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
      main(arr)
      
  }
 
}
function main(arr) {
  
    let i =0;
    let j =12;
    let miss;
while(i<=j){
  let mid =i+Math.floor((j-i)/2);
  if(arr[mid]===mid){
     
    i=mid+1
  }else{
       miss=mid;
      j=mid-1;
  }
}
console.log(miss);
}
if (process.env.USER=== "anmolkumar") {
  runProgram(`2
  0 1 2 4 5 6 9 10 11 12 
  1 2 3 5 7 8 9 10 11 12`);
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