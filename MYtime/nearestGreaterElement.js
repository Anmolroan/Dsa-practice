function runProgram(input) {
    // Write code here;
input=input.trim().split("\n")
var test =+input[0];
var line=1;
for(let i =0;i<test;i++){
    var N=+input[line++];
    var arr=input[line++].trim().split(" ").map(Number);
    find(N,arr)
}
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    7
    6 5 7 8 4 3 9`);
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
  function find(N,arr){
      var left=[];
      var stack=[];
      var top=-1;
      for(let i=0;i<N;i++){
          while(stack.length>0&&arr[stack[top]]<=arr[i]){
              stack.pop();
              top--;
          }
          if(stack.length>0&&arr[stack[top]]>arr[i]){
              left.push(stack[top])
          }
          else{
            left.push(-1)
          }
          stack.push(i);
          top++;
      }
    
      var right=[];
      var stack=[];
      var top=-1;
      for(let i=N-1;i>=0;i--){
        while(stack.length>0&&arr[stack[top]]<=arr[i]){
            stack.pop();
              top--;
        }
        if(stack.length>0){
            right.push(stack[top])
        }
        else{
            right.push(-1)
        }
        stack.push(i);
        top++;
      }
      right=right.reverse();
      var result=[];
     for(let i =0;i<N;i++){
         if(left[i]==-1&&right[i]==-1){
             result.push(-1)
         }
         else if(left[i]==-1){
             result.push(arr[right[i]])
         }
         else if(right[i]==-1){
            result.push(arr[left[i]])
        }
        else{
            var temp1=Math.abs(i-left[i]);
            var temp2=Math.abs(i-right[i]);
            if(temp1>temp2){
                 result.push(arr[right[i]])
            }
            else{
                 result.push(arr[left[i]])
            }
            
        }
      
     }
     console.log(result.join(" "))
  }