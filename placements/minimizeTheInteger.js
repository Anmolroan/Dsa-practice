function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let str =input[line++].trim().split("");
    
        main(str);
    }
   
  }
  function main(str){
    if(str[0]==="-"){
        str.shift();
        str =str.map(Number).sort((a,b)=>b-a).join("");
        str="-"+(str)
    }else{
        str =str.map(Number).sort((a,b)=>a-b).join("");
        
    }
    for(let i =0;i<str.length;i++){
        
    }
    console.log();
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    53334121
    -1002911
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