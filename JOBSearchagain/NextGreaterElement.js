function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        main(N,arr);
    }
   
  }

  function main(N,arr){
    let stack = [];
    let top =-1;
    let ans =[];
   for(let i =N-1;i>=0;i--){
    if(stack.length!=0){
        while(stack[top]<=arr[i]){
            stack.pop();
            top--;
        }
    }
    if(stack.length>0){
        ans.push(stack[top])
    }else{
        ans.push(-1)
    };
    stack.push(arr[i]);
    top++
   }
   console.log(ans.reverse().join(" "));
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    9
    2 5 1 6 2 4 4 5 5`);
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

//   5 6 6 -1 4 5 5 -1 -1