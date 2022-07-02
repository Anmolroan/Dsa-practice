function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i=0;i<tc;i++){
    let N =+input[line++];
    let arr=input[line++].trim().split(" ").map(Number);
    main(N,arr)
   }

  }
  function main(N,arr) {
   let stack = [];
   let top=-1;
   let ans = [];
   for(let i=0;i<arr.length;i++){
    while(stack.length>0&&arr[stack[top]]<=arr[i]){
        stack.pop();
        top--;
    }
    if(stack.length>0){
        ans.push(Math.abs(i-stack[top]))
    }else{
        ans.push(i+1)
    }
    stack.push(i);
    top++
   }
console.log(ans)
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