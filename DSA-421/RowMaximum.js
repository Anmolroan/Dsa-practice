function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let [M,N]=input[0].trim().split(" ").map(Number);
   let line =1;
   let max =-Infinity;
   let output =""
   for(let i =0;i<M;i++) {
    
    let arr =input[line++].trim().split(" ").map(Number);
   
  let sum = arr.reduce((p,c)=>{
   return Math.max(p,c)
    })
    output=output+sum+" ";
    
   }
   console.log(output)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9`);
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