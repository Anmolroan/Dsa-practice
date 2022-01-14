function runProgram(input) {
    // Write code here
   input=input.trim().split("\n")
   var test =+input[0];
   var line=1;
   for(let i = 0;i<test;i++){
       var N=+input[line++];
       var arr=input[line++].trim().split(" ").map(Number);
nextGreater(N,arr)
   }
  }
  function nextGreater(N,arr) {
      var left=[];
      var stack =[];
      var top =-1;

      for(let i = 0; i < arr.length; i++) {
while(stack.length>0&&arr[stack[top]]<=arr[i]){
    stack.pop();
    top--;
}
if(stack.length>0&&arr[stack[top]]>arr[i]){
    left.push(stack[top]);

}else{
    left.push(-1)
}
stack.push(i);
top++;
      }

console.log(left);
var right=[];
      var stack =[];
      var top =-1;

      for(let i = N-1; i >=0; i--) {
while(stack.length>0&&arr[stack[top]]<=arr[i]){
    stack.pop();
    top--;
}
if(stack.length>0&&arr[stack[top]]>arr[i]){
    right.push(stack[top]);

}else{
    right.push(-1)
}
stack.push(i);
top++;
      }
      right=right.reverse();
console.log(right);
let ans =[];
for(let i=0;i<N;i++){
    if(left[i]==-1&&right[i]==-1){
ans.push(-1);
    }else if(left[i]==-1){
        ans.push(arr[right[i]]);
    }else if(right[i]==-1){
        ans.push(arr[left[i]]);
    }
    else{
        var temp1 =Math.abs(i-left[i]);
        var temp2 =Math.abs(i-right[i]);
        if(temp2<temp1){
            ans.push(arr[right[i]])
        }else{
            ans.push(arr[left[i]])
        }
    }
}console.log(ans)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5
    5 4 1 3 2`);
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