function runProgram(input) {
    // Write code here
   let N =+input;
   
   let count =Math.floor(N/5)+1;
console.log(count);
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`26`);
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