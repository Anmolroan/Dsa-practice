function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let array = input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
   let ans =0;
array.map((el,i) =>{
ans =ans+(el*i);
})
console.log(ans);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    2 5 1 6`);
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