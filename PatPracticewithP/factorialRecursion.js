function runProgram(input) {
    // Write code here
    let N =+input;
    factorail(N);
   
  }
  function factorail(N) {
      rec =(i)=>{
          if(i>N){
              return 1;
          }
       return i*(rec(i+1))
      }
      console.log(rec(1))
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