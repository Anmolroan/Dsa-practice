function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let [N,K]=input[0].trim().split(" ").map(Number);
    let arr =input[1].trim().split(" ").map(Number);
    takeOutMaximum(N,K,arr);
   
  }
  function takeOutMaximum(N,K,arr){
      let sum =0;
      let max =0;
      for(let i=0;i<K;i++){
        sum =sum+arr[i];
      }
      max=sum;
    //   console.log(sum);
      for(let i=K;i<arr.length;i++){
          sum=sum-arr[i-K];
          sum=sum+arr[i];
          if(max<sum){
              max=sum;
          }
      }
      console.log(max);
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