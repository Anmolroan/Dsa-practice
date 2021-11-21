function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   var N=+input[0];
   var arr=input[1].trim().split(" ").map(Number);
   minimum(N,arr)
  }
  function minimum(N,arr){
    var i=0;
    var j=N-1;
    var min=null;
    
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`15
    10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8`);
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