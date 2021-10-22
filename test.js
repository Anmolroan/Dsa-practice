function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i =0;i<test;i++){
      var N=+input[line++];
      var arr=input[line++].trim().split(" ").map(Number)
      sumRecursion(N,arr)

    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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
  function sumRecursion(N,arr){
    function sum (i,Sum,arr,N){
      if(i===N-1){
        return Sum;
      }
      var diff=Math.abs(arr[i]-arr[i+1]);
      Sum=Sum+diff;
    
      return sum(i+1,Sum,arr,N);
    }
    console.log(sum(0,0,arr,N))
  }