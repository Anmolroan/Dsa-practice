function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
    var N=+input[0]
    var string=input[1].trim()
    subs(N,string)
   
  }
  function subs(N,string) {
     
    let rec =(cur,newarr)=>{
        if(newarr.length>0){
            console.log(newarr,cur)
        }
        if(cur===N){
            return;
        }
        for(let i = cur ;i < N ; i++){
            newarr.push(string[i]);
            rec(i+1,newarr);
            newarr.pop();
        }
    }
rec(0,[])
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    abc`);
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