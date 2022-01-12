function runProgram(input) {
    // Write code here;
    let str =input.trim();
   reduce(str);
  }
  function reduce(str) {
      let stack =[];
      let top =-1;
      let i =0;
      while(i<str.length) {
        if(stack.length>0&&stack[top]!=str[i]){
            stack.push(str[i]);
            top++;
        }else if(stack.length==0){
            stack.push(str[i]);
            top++;
        }else{
            stack.pop();
            top--;
        }
        i++;
      }
      if(stack.length>0){
          console.log(stack.join(""))
        }else{
            console.log("Empty String")
        }
      
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`aaabccddd`);
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