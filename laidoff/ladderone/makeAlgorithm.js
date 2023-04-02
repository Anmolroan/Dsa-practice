function runProgram(input) {
    // Write code here
    let N  =+input;
    let str =N;
    let i=N;
    while(i>1){
        if(N%2!==0){
            N=(N*3)+1
            str=str+" "+N;
        }
        else if(N%2===0){
            N=N/2;
            str=str+" "+N;
        }
        i=N;
        console.log(str);
    }
    console.log(str);
   
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