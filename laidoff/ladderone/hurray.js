function runProgram(input) {
    // Write code here
    input =+input;
    if(input%35===0){
        console.log("")
    }else if(input%7){
        console.log("")
    }else{
        console.log("")
    }

   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`105`);
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