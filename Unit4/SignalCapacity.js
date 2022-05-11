function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
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
      let top =-1;
      let ans=[]
      for(let i=0; i<arr.length; i++){
          while(stack.length!=0&&arr[stack[top]]<=arr[i]){
              stack.pop();
              top--;
          }if(stack.length!=0){
            ans.push(Math.abs(stack[top]-i))
          }else{
            ans.push(i+1)
          }
          stack.push(i);
          top++;
      }
      console.log(...ans)
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