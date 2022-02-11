function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tests=+input[0];
    let line =1;
    for(let i=0; i<tests; i++){
let N =+input[line++];
let arr=input[line++].trim().split(" ").map(Number)
let K =+input[line++];
console.log(arr,N,K);
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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