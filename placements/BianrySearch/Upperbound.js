function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var [N,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number).sort((a, b) =>a-b)
   binary(N,k,arr)
  }
 function binary(N,k,arr) {
    let i =0;
    let j =N-1;
    let flag=-1;
    let upperbound=-1;
    while(i<=j){
       let mid =i+Math.floor((j-i)/2);
       if(arr[mid]<=k){
        i=mid+1;
       }else{
        upperbound=mid;
        j=mid-1;
       }
    }
console.log(upperbound);
 }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10 10
    0 2 4 4 5 5 7 7 9 10`);
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