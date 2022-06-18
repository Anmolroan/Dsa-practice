function runProgram(input) {
    // Write code here;
    input =input.trim().split('\n');
    let N =+input[0];
    let line =1;
    let stack = [];
    let queue = [];
    for(let i=0; i<N; i++) {
        let temp = input[line++].trim().split(' ').map(Number);
        if(temp[0]===1){
            queue.push(temp[1])
        }else if(temp[0]===2){
            stack.push(temp[1])
        }else if(temp[0]===3){
            if(queue.length>0){
                console.log(queue[0])
            }else{
                console.log(-1)
            }
           
        }else if(temp[0]===4){
            if(stack.length>0){
                console.log(stack[stack.length-1])
            }else{
                console.log(-1)
            }
        }else{
            stack.push(queue.shift())
        }
    }
   
  }
  
  if (process.env.USER=== "anmolkumar") {
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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