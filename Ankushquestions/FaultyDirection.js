function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let line =1;
    let tc =+input[0];
    for(let i =0;i<tc;i++){
        let N =+input[line++];
        let str =input[line++].trim();
        main(N,str);
    }
   
  }
  function main(N,str){
    for(let i=0;i<N;i++){
        
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    RLRUD
    4
    LRUD`);
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