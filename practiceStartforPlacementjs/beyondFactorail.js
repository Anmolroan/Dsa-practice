function runProgram(input) {
    // Write code here
    var n=+input
    console.log(log(n).toFixed(4))
    // console.log(Math.log(3)+Math.log(2)+Math.log(1))
    function log(n){
        if(n==0){
return 0;
        }
        return Math.log(n)+log(n-1)
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3`);
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