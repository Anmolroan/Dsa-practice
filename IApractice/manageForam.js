function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    let a=input[1].trim().split(" ").map(Number);
    let b=input[2].trim().split(" ").map(Number);
    console.log(n, a, b);
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    1 3 5
    2 6 8`);
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