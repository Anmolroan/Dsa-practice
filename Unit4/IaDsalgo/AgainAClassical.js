function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line=1;
   for(let i =0;i<tc;i++){
       let str =input[line++].trim();
      main(str);
   }
  }
  function main(str){
      let stack = [];
      let top=-1;
      let c="()";
      let m ="{}";
      let b="[]"
      for(let i =0;i<str.length;i++){
        let e =stack[top]+str[i]
        if(e===c||e===m||e===b){
          stack.pop();
          top--;
        }else{
          stack.push(str[i]);
          top++;
        }
      }
    if(stack.length!==0){
      console.log("not balanced")
    }else{
      console.log("balanced")
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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