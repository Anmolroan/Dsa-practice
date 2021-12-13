function runProgram(input) {
    // Write code here;
    input =input.trim().split('\n');
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    spider(N,arr);
   
  }
  function spider(N,arr) {
      let sum =0;
      for(let i =0;i<N-2;i++) {
var temp=Math.min(Math.abs(arr[i+1]-arr[i]),Math.abs(arr[i]-arr[i+2]));
sum =sum+temp
      }
      console.log(sum);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    10 30 40 20`);
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