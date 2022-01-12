function runProgram(input) {
    // Write code here
    input=input.trim().split("\n") ;
   let N =+input[0] ;
   let arr =input[1].trim().split(" ").map(Number);
   let K =+input[2]
   uniqueSubset(N,arr,K) ;
  }
  function uniqueSubset(N,arr,K){

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 
    1 2 1
    2`);
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