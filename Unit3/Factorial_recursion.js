function runProgram(input) {
    // Write code here
    let N =+input[0];
   
   console.log(fac(N));
   
   
   
  }
  function fac(N){
    if(N===0){
        return 1;
    }
   
    return N*fac(N-1);
}
 
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5`);
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