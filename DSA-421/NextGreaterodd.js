function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    let tc =+input[0];
    let line =1;
    for(let i=0; i<tc; i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        main(arr,N)
    }
  }
  function main(arr,N) {
      let stack = [];
      let top=-1;
      let count=0;
      let ans = [];
      for(let i=N-1; i>=0; i--){
          while(stack.length!=0&&stack[top]<=arr[i]){
              stack.pop();
              top--;
          }if(stack.length>0){
            if(stack[top]%2!=0){
                count=count + arr[i];
            }
            //  ans.push(stack[top])
          }
        // else{
        //       ans.push(-1)
        //   }
          stack.push(arr[i]);
          top++
      }
      console.log(count);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5
    2 3 5 8 3`);
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