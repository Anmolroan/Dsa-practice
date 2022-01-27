function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
var tests =+input[0];
var line =1;
for(var i=0; i<tests;i++){
var matrix =[];


var N =input[line++];
for(var j =0;j<N;j++){
    var temp =input[line++].trim().split(" ").map(Number);
    matrix.push(temp);
}
console.log(matrix);
}

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    4 5 6 7
    2 3 4 5`);
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