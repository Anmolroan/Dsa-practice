function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    
    let tc = +input[0];
    let line = 1;
    let stack = [];
  
    let top =-1;
    let min =[];
    let t =-1;

    for(var i=0;i<tc;i++){
    
        let A = input[line++].trim().split(" ");
        if(A[0]==="push"){
            stack.push(+A[1]);
            top++;
            if(min.length===0||stack[top]<min[t]){
                min.push(stack[top]);
                t++;
            }else{
                min.push(min[t]);
                t++;
            }
        }else if(A[0]==="pop"){
            if(stack.length>0){
                stack.pop();
                top--;
            }if(min.length>0){
               min.pop();
               t--;
            }
        }else {
            if(min.length>0){
                 console.log(min[t])
            }
           
        }


    }

   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`8
    push 5
    push 3
    push 1
    getMin
    pop
    getMin
    pop
    getMin`);
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