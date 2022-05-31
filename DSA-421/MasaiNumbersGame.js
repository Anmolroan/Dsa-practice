function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let line =1;
 let N =+input[0];
 let arr=[];
 for(let i =0; i<N;i++){
    arr.push(+input[line++]);
 }  
 main(arr,N);
  }
  function main(arr,N) {
      var stack = [];
      var top=-1;
      var ans = [];
      
      for(let i =N-1;i>=0;i--){
      
        while(stack.length>0&&stack[top]<=arr[i]){
            stack.pop();
            top--;
        }if(stack.length>0){
         ans.push(stack[top])
        }else{
            ans.push(-1)
        }
       
        stack.push(arr[i]);
        top++;
      }
      console.log(ans.join(" "));
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`8
    3
    7
    1
    7
    8
    4
    5
    2`);
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