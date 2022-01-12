function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    var n=+input[0];
    var queries=[];
    var line=1;
    for(let i=0;i<n;i++){
    var q=input[line++].trim().split(' ').map(Number);
    queries.push(q)
    }
    popush(queries)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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