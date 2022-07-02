function runProgram(input) {
    // Write code here
  N=+input.trim();
 let i=1;
 let j=N-1;
 let ways=1;
 while(i<N-1&&j>=1){
i++;
j--;
ways++
 }
 console.log(ways);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`48`);
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