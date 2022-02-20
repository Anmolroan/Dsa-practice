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
    var obj={};
    let bag="";
    for(let i =0;i<str.length;i++){
      if(obj[str[i]]===undefined){
        obj[str[i]]=1;
      }else{
        obj[str[i]]=obj[str[i]]+1;
      }
      let flag =true;
      for(let key in obj){
        if(obj[key]===1){
          bag=bag+key;
          flag=false;
          break;
        }
      }
      if(flag){
        bag=bag+"#";
      }
      
    }
    
      console.log(bag);
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