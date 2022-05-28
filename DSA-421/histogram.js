function runProgram(input) {
    // Write code here
    let tc =+input[0];
    let line =1;
    for(let i=0; i<tc; i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        main(arr,N)
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    4
    2 3 4 5
    6
    7 5 4 3 6 8`);
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