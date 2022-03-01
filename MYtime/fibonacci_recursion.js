function runProgram(input) {
    // Write code here
    var n=+input;
    fibonacci(n)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4`);
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
  function fibonacci(n){
     function fib(n){
        if(n==1||n==2){
            return 1
        }
        return fib(n-1)+fib(n-2)
      }
      console.log(fib(n))
  }