function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
    var N=+input[0];

    
    
    subs(N)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10`);
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
  function subs(N){
 

  }