function runProgram(input) {
    // Write code here;
    input =input.trim().split('\n');
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    spider(N,arr);
   
  }
  function spider(N,arr) {
function rec(n) {
if(n===N){
  return 0;
}
return sum+Math.abs(arr[n]-arr[n+1])
}
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`6
    30 10 60 10 60 50`);
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