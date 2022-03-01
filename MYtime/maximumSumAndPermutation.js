function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var N= +input[0];
    var arr =input[1].trim().split(" ").map(Number);
    maximumSum(N,arr)
   
  }
  function maximumSum(N,arr){
      arr.sort((a,b)=>a-b);
      var sum=0;
      for(let i =0;i<N;i++){
          sum=sum+arr[i]*i
      }
      console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    2 5 1 6`);
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