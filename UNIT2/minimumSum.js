function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line =1;
    for(let i=0;i<test; i++){
        let [N,K]=input[line++].trim().split(" ").map(Number);
        let arr =input[line++].trim().split(" ").map(Number);
        minimumSum(N,K,arr);
    }
   
  }
  function minimumSum(N,K,arr){
      let sum = 0;
      for(let i=0;i<K; i++){
        sum =sum + arr[i];
      };
      let min=sum;
      for(let i=K;i<N;i++){
          sum=sum - arr[i-K];
          sum=sum + arr[i];
          if(sum<min){min=sum}
      };
      console.log(min)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5 3
    9 9 -5 9 5 
    5 4
    2 7 6 2 -5 
    `);
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