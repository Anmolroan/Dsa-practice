function runProgram(input) {
    // Write code here
   input =input.trim().split(' ');
   let N = input.length;
   let arr =new Array(N).fill(0);
   for(let i=N-1;i>=0;i--){
       arr[i]=input[N-i-1]
   }
   console.log(...arr)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`A Transformation in education`);
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