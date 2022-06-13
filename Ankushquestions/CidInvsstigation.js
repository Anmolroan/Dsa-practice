function runProgram(input) {
    // Write code here
    let str =input.trim();
   main(str)
  }
  function main(str) {
    let one ="abc";
    let two ="def";
    let three ="ghi";
    let four ="jkl";
    let five ="mno";
    let six ="pqrs";
    let seven ="tuv";
    let eight ="wxyz";
    
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`22`);
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