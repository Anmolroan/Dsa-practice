function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var test=+input[0]
    var line=1;
    for(let i=0;i<test;i++){
        var N=+input[line++]
        Makebinary(N)
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    15
    128`);
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
function  Makebinary(N){
    var str=[];
    function bin(n){
        if(n==1){
            str.push(1)
            
            return str;
        }
       var num=n%2;
       str.push(num)
      
        ;
        return bin((n-num)/2)
    }
    var r=bin(N)
    console.log(r.reverse().join(""))
}