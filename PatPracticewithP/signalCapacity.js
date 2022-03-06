function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let test=+input[0];
    let line =1;
    for(let i =0;i<test;i++){
let  N =+input[line++];
let arr = input[line++].trim().split(" ").map(Number);
signal(N,arr)
    }
   
  }
  function signal(N,arr){
      var stack =[];
      var ans =[];
      var top =-1;
      for(let i=0;i<N;i++){
          while(stack.length!=0&&arr[stack[top]]<=arr[i]){
            stack.pop();
            top--;
          }if(stack.length>0){
              ans.push(stack[top])
          }else{
              ans.push(-1)
          };
          stack.push(i);
          top++;
      }
     
      var result=[];
      for(let i =0;i<N;i++){
if(ans[i]===-1){
    result.push(i+1);
}else{
    result.push(Math.abs(i-ans[i]))
}
      }
      // console.log(ans)
      console.log(result.join(" "));
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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