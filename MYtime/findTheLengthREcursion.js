function runProgram(input) {
    // Write code here
   var string=input.trim()
   findLength(string)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`masaischool`);
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
  function findLength(string){
      let count=0;
       let length=(string)=>{
          if(count===string.length){
              return count;
          }
          count++;
          return (length(string))
      }
      console.log((length(string)))
  }