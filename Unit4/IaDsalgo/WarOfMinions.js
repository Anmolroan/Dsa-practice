function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let N =+input[0];
    let str = input[1].trim();
   main(str,N);
   
  }
  function main(str,N) {
      let stack = [];
      let top=-1;
      for(let i=0;i<N;i++){
        if(str[i]===stack[top]){
            stack.pop();
            top--;
        }else{
            stack.push(str[i]);
            top++;
        }
      }
      if(stack.length>0){
        console.log(stack.join(""));
      }else{
          console.log(-1)
      }
      
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`12
    abbabaadcbbc`);
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