function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    var test = +input[0];
    
    let line =1;
    for(let i = 0; i < test;i++) {
        let N =+input[line++];
        santosh(N);
    }
   
  }
  function santosh(N){
      function rec(N){
          if(N===0){
              return 1;
          }
          if(N<0){
              return 0;
          }
          return rec(N-4)+rec(N-8)
      }
      console.log(rec(N))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    12`);
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