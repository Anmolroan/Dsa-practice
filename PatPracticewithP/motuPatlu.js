function runProgram(input) {
    // Write code here;
    let N =+input[0];
    motuPatlu(N);
   
  }
  function motuPatlu(N) {
      function rec(N){
          if(N===0){
              return 1;
              
          }if(N<0){
              return 0
          }
          return rec(N-1)+rec(N-2)+rec(N-3)+rec(N-4)+rec(N-5);
      }
      console.log(rec(N));
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`26`);
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