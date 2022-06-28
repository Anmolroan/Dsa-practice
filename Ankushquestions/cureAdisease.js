function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let N =+input[0];
   let vac=input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
   let mid=input[2].trim().split(" ").map(Number).sort((a, b) =>a-b);
   let flag="Yes";
   for(let i =0;i<N;i++) {
    if(vac[i]<=mid[i]) {
        flag="No"
    }
   }
   console.log(flag);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    41 56 12 45 89
    10 10 10 10 10`);
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