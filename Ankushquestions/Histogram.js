function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i =0;i<tc;i++){
    let N =+input[line++];
    let arr =input[line++].trim().split(" ").map(Number);
    main(N,arr)
   }
  }
  function main(N,arr) {
 var stack = [];
 var top=-1;
var left = [];

 for(let i=0;i<arr.length;i++){
    while(stack.length!=0&&arr[stack[top]]>=arr[i]){
        stack.pop();
        top--;
    }
    if(stack.length>0){
        left.push(Math.abs(stack[top]-i))
    }
    else{
        left.push(i+1)
    }
    stack.push(i);
    top++
 }
 var stack = [];
 var top=-1;
var right = [];

 for(let i=N-1;i>=0;i--){
    while(stack.length!=0&&arr[stack[top]]>=arr[i]){
        stack.pop();
        top--;
    }
    if(stack.length>0){
        right.push(Math.abs(stack[top]-i))
    }
    else{
        right.push(i+1)
    }
    stack.push(i);
    top++
 }
 right=right.reverse();
console.log(left,right)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    4
    2 3 4 5
    6
    7 5 4 3 6 8`);
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