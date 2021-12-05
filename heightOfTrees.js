function runProgram(input) {
    // Write code here
   input=input.trim().split("\n")
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   main(N,arr)
  }
  function  main(N,arr){
      let dp=[];
      for(let i =0;i<N;i++){
          dp[i]=1;
      }
 for(let i =1;i<=N-1;i++){
   for(let j =0;j<i;j++){
     if(arr[i]>arr[j]){
       dp[i]=Math.max(dp[i],dp[j]+1);
     }
   }
 }

 dp.sort((a,b)=>a-b);
//  console.log(dp)
 console.log(dp[N-1])
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`9
    10 22 9 33 21 50 41 60 80`);
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