function runProgram(input) {
    // Write code here
    var [n,r]=input.trim().split(" ").map(Number);
    gp(n,r)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 5`);
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
  function  gp(n,r){
      print=(i,n,r)=>{
          if(i>n){
            return 0;
          }
         return (1/r**i)+print(i+1,n,r)
      }
      console.log(print(0,n,r).toFixed(4))
  }