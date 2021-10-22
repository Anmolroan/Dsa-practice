function runProgram(input) {
    // Write code here
   string=input.trim();
   unique(string)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`my name is ankush`);
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
  function unique(string){
    var top=-1;
    var stack=[]
    print=(string,i)=>{
        if(i===string.length){
            return stack;
        }
     
if(stack.length===0){
    stack.push(string[i]);
    top++
}
if(stack.length!=0&&stack[top]!=string[i]&&string[i]!=" "){
    var count=0;
    for(let j =0;j<stack.length;j++){
        if(string[i]===stack[j]){
            count++;
        }
    }
    if(count==0){
        stack.push(string[i]);
        top++;
    }
}
return print(string,i+1)
    }
    console.log(print(string,0).join(""))
  }