function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
let str=input[line++].trim();
Unique(str)
    }
   
  }
  function Unique(str) {
      let q=[];
      q.push(str[0]);
      let ans=str[0];
      for(let i=1; i<str.length; i++){
        if(str[i]!=q[0]){
            q.push(str[i]);
            ans=ans+q[0];
        }else{
            q.shift();
            if(q.length>0){
                ans=ans+q[0];
            }else{
                ans=ans+"#"
            }
            
        }
      }
    
      console.log(ans);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    abadbc
    abcabc`);
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