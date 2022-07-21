function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   var N=+input[0];
   var arr=input[1].trim().split(" ").map(Number);
   minimum(N,arr)
  }
  function minimum(N,arr){
    let a = 10; if (a<=10) { let a = 5;console.log(a) } 
console.log(a)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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