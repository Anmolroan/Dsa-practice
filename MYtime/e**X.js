function runProgram(input) {
    // Write code here
    var [x,n]=input.trim().split(" ").map(Number)
    ePx(x,n)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4 2`);
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
  function  ePx(x,n){
   
      fact=(f)=>{
        if(f==1||f==0){
            return 1;
        }
        return f*fact(f-1)
      }
      function EtoX(N){
        if(N>n){
            return 0;
        }
    // var num=(x/fact(N)).toFixed(4);
        return (x**N/fact(N))+EtoX(N+1)

       
      }
      console.log(EtoX(0).toFixed(4))
  }