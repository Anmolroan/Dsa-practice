function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i =0;i<test;i++){
      var string=input[line++].trim();
      findBalance(string)
    }
   
  }
  function findBalance(string) {
    
    let stack=[] ;
    let top=-1;
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string[i]==="{"||string[i]=="["||string[i]=="("){
            stack.push(string[i]);
            top++;
        }else {
            count++;
            if(stack[top]+string[i]==="{}"||stack[top]+string[i]==="()"||stack[top]+string[i]==="[]"&&stack.length>0){
                stack.pop();
                top--;
                count--;
            }
        }
    
    }
  
    if(stack.length>0||count!=0){
        console.log("not balanced")
    }else{
        console.log("balanced")
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    ()
    {
    }
    
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