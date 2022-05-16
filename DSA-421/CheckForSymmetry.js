function runProgram(input) {
    // Write code here
    input=input.trim().split('\n')
   let tc =+input[0];
   let line =1;
   for(let i=0; i<tc; i++){
       let N =+input[line++];
       let matrix =[];
       for(let j =0;j<N;j++){
matrix.push(input[line++].trim());
       }
       main(matrix);
   }
  }
  function main(matrix) {
      
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
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