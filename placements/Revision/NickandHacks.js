function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i =0;i<test;i++){
        var N=+input[line++];
        HelperNick(N)
        
    }
   
  }
  function HelperNick(N){
    let flag ="No"
    let  rec =(i)=>{
        
        if(i===N){
            flag="Yes"
            return 1;
        }
        if(i>N){
            return 0 ;
        }
        return rec(i*10)||rec(i*20)
    }
    rec(1);
    console.log(flag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    200`);
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