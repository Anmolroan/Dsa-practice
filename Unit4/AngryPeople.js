function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let arr = input[1].trim().split(" ").map(Number).sort((a, b) =>a-b)
   main(arr,N)
  }
  function main(arr,N) {
      let max =-Infinity;
      let left =[];
      left.push(arr[0])
      let right=[];
     right.push(arr[0]);
     while()
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    5 10 6 8`);
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