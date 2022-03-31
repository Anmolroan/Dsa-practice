function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i =0 ;i<tc ;i++){
    let N=+input[line++];
    let arr =input[line++].trim().split(" ").map(Number);
    SoNs(N,arr);
    }
  }
  function SoNs(N,arr){
      let stack = [];
      let top=-1;
      let ans =0;
      for(let i =N-1;i>=0;i--){
          while(stack.length>0&&stack[top]>=arr[i]){
              stack.pop();
              top--;
          }if(stack.length>0){
              ans=ans+stack[top];
          }
          stack.push(arr[i]);
          top++;
      }
      console.log(ans)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    4
    4 3 1 2
    4
    1 2 3 4`);
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