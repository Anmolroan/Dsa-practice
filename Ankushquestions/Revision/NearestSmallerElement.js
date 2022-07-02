function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i=0;i<test;i++){
      var N=+input[line++];
      var arr=input[line++].trim().split(" ").map(Number);
      find(N,arr)
    }
   
  }
  function find(N,arr){
    let left =[];
    let right =[];
    var stack = [];
    var top=-1;
    
    for(let i = 0 ; i < arr.length ; i++){
        while(stack.length!=0&&arr[stack[top]]>=arr[i]){
            stack.pop();
            top--;
        }if(stack.length>0){
            left.push(stack[top])
        }else{
            left.push(-1)
        }
        stack.push(i);
        top++;
    }
   
    var stack = [];
    var top=-1;
    for(let i = arr.length-1 ; i >= 0  ; i--){
        while(stack.length!=0&&arr[stack[top]]>=arr[i]){
            stack.pop();
            top--;
        }if(stack.length>0){
            right.push(stack[top])
        }else{
            right.push(-1)
        }
        stack.push(i);
        top++;
    }
    right=right.reverse();
    let ans =[];
    for(let i=0;i<arr.length;i++){
        if(left[i]===-1&&right[i]===-1){
            ans[i]=-1;
        }else if(left[i]===-1){
            ans[i]=arr[right[i]]
        }else if(right[i]===-1){
            ans[i]=arr[left[i]]
        }else{
            let l1=Math.abs(i-left[i]);
            let r1=Math.abs(i-right[i]);
            if(l1<=r1){
                ans[i]=arr[left[i]]
            }else{
                ans[i]=arr[right[i]]
            }
        }

    }
console.log(ans.join(" "))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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