function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [N,K] = input[0].trim().split(" ").map(Number);
    let arr =input[1].trim().split(" ").map(Number);
    upper(N,K,arr);
   
  }
  function upper(N,K,arr) {
      let l = 0;
      let h =N-1;
      let ans =-1;
      while(l<=h){
          let mid =l +Math.floor((h-l)/2)
          if(arr[mid]<=K){
              l = mid+1;
          }else{
              ans =mid
              h =mid-1;
          }
      }
      console.log(ans)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10 3
    0 2 4 4 5 5 7 7 9 10`);
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