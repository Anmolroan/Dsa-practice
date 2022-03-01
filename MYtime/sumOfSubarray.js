function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
   
    for(i=0;i<test;i++){
        var[N,K]=input[line++].trim().split(" ").map(Number);
        var arr=input[line++].trim().split(" ").map(Number);
        findSum(N,K,arr)
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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
  function  findSum(N,K,arr){;
    arr.sort((a,b)=> a-b);
   var sum=0;
   for(i=0;i<N;i++){
       sum=sum+arr[i]
   }
     
  }