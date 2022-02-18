function runProgram(input) {
    // Write code here
  input =input.trim().split("\n");
  var tc =+input[0];
  var line=1;
  var matrix=[];
  for(var i=0; i<tc; i++){
var temp = input[line++].trim().split(" ").map(Number);
matrix.push(temp);
  }
   console.log(matrix);

var arr=[];


  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`6
    1 
    1 
    2
    3
    2
    3`);
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