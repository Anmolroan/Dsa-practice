function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line =1;
    for(let i = 0; i < test; i++) {
        let N =+input[line++];
let arr =input[line++].trim().split(" ").map(Number);
sem(N,arr);
    }
   
  }
  function sem(N,arr){
      let sum =0;
    for(let i =-1; i <N; i=i+2) {
sum=sum+Math.max(arr[i+1],arr[i+2]);
    }
    console.log(sum);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    1 2 3 4 5
    1
    10`);
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
