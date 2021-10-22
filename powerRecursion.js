function runProgram(input) {
    // Write code here
    var[a,b]= input.trim().split(" ").map(Number)
    console.log (power(a,b,1))
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2 4`);
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
  function power(a,b,i){
      if(i==b){
          return a
      }
      return a*power(a,b,i+1)
  }