function runProgram(input) {
    // Write code here
   input =input.trim().split("\n");
   let test =+input[0];
   let line = 1;
   for(let i =0;i<test;i++){
       
   }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    6
    7 1 5 3 6 4
    4
    4 3 2 1
    `);
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