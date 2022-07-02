function runProgram(input) {
    // Write code here
     input = input.trim().split('\n');
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++){
        let [day, month, year]=input[line++].trim().split("/").map(Number);
       find(day,month,year)
    }
   
  }
  function find(day,month,year){
    let monthV=[31,28,31,30,31,30,31,31,30,31,30,31];

    let presY=2022;
    let presM=6;
    let presD=22;
var N=presM;
    for(let i=1;i<=N;i++){
        
    }
    if(presY>year){
        let 
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    9/2/2025
    1/2/2017
    21/2/1989
    `);
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