function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var N=+input[0];
   
    var matrix=[];
    for(let i=1;i<=N;i++){
      var s=input[i].trim().split(" ");
      matrix.push(s)
     
    }
    
    find(matrix);
   
  }
  function find(matrix){

    let stack=[];
    let top=-1;
    let minstack=[];
    let t=-1;
    for(let i =0;i<matrix.length;i++){
        if(matrix[i][0]==="push"){
            if(stack.length===0){
                stack.push(+matrix[i][1]);
                minstack.push(+matrix[i][1]);
                t++;top++;
            }
            else if(+matrix[i][1]<minstack[top]){
                stack.push(+matrix[i][1]);
                minstack.push(+matrix[i][1]);
                t++;
                top++;
            }else{
                stack.push(+matrix[i][1]);
                minstack.push(minstack[t])
                t++;
                top++;
            }
        }else if(matrix[i][0]==="pop"){
            minstack.pop();
            stack.pop();
            t--;
            top--;
        }else{
            console.log(minstack[t])
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
  