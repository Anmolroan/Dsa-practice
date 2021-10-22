function runProgram(input) {
    // Write code here
    input=+input;
    find(input)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4`);
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
  function  find(input){
      now=(n)=>{
        if(n<0){
            return 0;

        }
        if(n==0){
            return 1;
        }
        return now(n-1)+now(n-2)+now(n-3)
      }
      now(input)
      console.log( now(input))
  }
