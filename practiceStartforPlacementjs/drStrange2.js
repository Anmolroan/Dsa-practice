function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
    var N=+input[0];
    var arr=input[1].trim().split(" ").map(Number)
  arr.sort((a,b)=>a-b)
    
    
    subs(N,arr);
   
  }
  function subs(N,arr) {
      
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    1 2 2`);
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