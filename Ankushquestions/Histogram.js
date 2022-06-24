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
        right.push(Math.abs(stack[top]-i-1))
    }
    else{
        right.push(N-1-i)
    }
    stack.push(i);
    top++
 }
 right=right.reverse();
let max=-Infinity
for(let i =0;i<arr.length;i++){
    let prod=(left[i]+right[i])*arr[i];
    if(prod>max){max=prod}
}
console.log(max)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    40
    141 356 513 942 796 963 554 453 420 608 25 147 987 544 951 736 861 710 863 104 868 598 956 982 750 256 117 709 705 149 492 359 419 30 553 919 83 338 793 627`);
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