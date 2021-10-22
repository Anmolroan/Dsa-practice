function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i =0;i<test;i++){
        let N=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number)
        findSum(N,arr)
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
  function findSum(N,arr){
sum=(i,s,arr,N)=>{
if(i==N){
    return s
}
s=s+arr[i];
return sum(i+1,s,arr,N)
}
console.log(sum(0,0,arr,N))
  }