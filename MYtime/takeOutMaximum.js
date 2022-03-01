function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var [N,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
   
    findMaximum(N,k,arr)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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
  function findMaximum(N,k,arr){
      var sum=0;
      for(var i=0;i<k;i++){
          sum=sum+arr[i];
      }
      var max=sum;
      for(var i=k;i<N;i++){
          sum=sum-arr[i-k];
          sum=sum+arr[i];
          if(sum>max){max=sum;}
      }
      console.log(max)
  }