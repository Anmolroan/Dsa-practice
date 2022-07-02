function runProgram(input) {
    // Write code here
    var [x,n]=input.trim().split(" ").map(Number)
    ePx(x,n)
   
  }
  function ePx(x,n){
    let fact=(i)=>{
        if(i==0){
            return 1;
        }
        return i*fact(i-1)
    }
    let ex=(i)=>{
        if(i===0){
            return 1
        }
        return x**i/fact(i)+ex(i-1)
    }
    console.log(ex(n).toFixed(4))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2.10000 10`);
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