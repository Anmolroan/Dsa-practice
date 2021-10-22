function runProgram(input) {
    // Write code here
   var N=+input
   BobandBoxes(N)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`7`);
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
  function  BobandBoxes(N){
      function now(n){
        if(n>N){
            return 0;
        }
        if(n==N){
            return 1
        }
       return now(n+1)+now(n+3)+now(n+5)
      }
      console.log(now(0))
  }