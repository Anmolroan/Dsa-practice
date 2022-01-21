function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var N=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    sne(N,arr)
   
  }
  function sne(N,arr){
      let  top =-1;
      let stack = [];
      let count = 0;
let ans =[]
      for(var i = N-1; i >=0;i--){
while(stack.length>0&&stack[top]>=arr[i]){
    stack.pop();
    top--;
}if(stack.length>0&&stack[top]<arr[i]){
    ans.push(stack[top])
}else{
    ans.push(-1);
    count++;
}
stack.push(arr[i]);
top++;
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    4 2 1 3 7`);
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