function runProgram(input) {
    // Write code here
    let [N,M]= input.trim().split(" ").map(Number);
    main(N,M)
   
  }
  function main(N,M){
  console.log(N,M);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`148 3`);
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