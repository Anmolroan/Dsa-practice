function runProgram(input) {
    // Write code here
   let n =+input;
    let arr=[5,4,3,2,1];
    let i =0;
   let N =Math.floor(n/5);
   let a=(n%5);
   console.log(a)
   for(let i=0; i<arr.length; i++){
    if(a===arr[i]){
    N=N+1;
    break;
    }
   }
   console.log(N)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1`);
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