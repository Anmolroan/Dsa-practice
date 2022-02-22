function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;

    for(let i=0;i<tc;i++){
    var N =+input[line++];
    Binary(N);
                          };

   
  }
  function Binary(N){
      function rec(N){
          
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    15
    128`);
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