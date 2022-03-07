function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc =+input[0];
    var line =1;
    for(let i = 0;i<tc;i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
       fin(N,arr)
    }
   
  }
  function  fin(N,arr){
      var stack =[];
      let top =-1;
      let ans =[];
      for(let i =0;i<N;i++){
          while(stack.length!=0&&arr[stack[top]]<=arr[i]){
              stack.pop();
              top--;
          }if(stack.length!=0){
              ans.push(stack[top])
          }else{
              ans.push(-1)
          }
          stack.push(i);
          top++;
      }
      for(let i =0;i<N;i++){
          if(ans[i]===-1){
              ans[i]=i+1;
          }else{
              ans[i]=Math.abs(i-ans[i])
          }
      }
      console.log(ans.join(" "))

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    6
    100 60 70 65 80 85`);
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