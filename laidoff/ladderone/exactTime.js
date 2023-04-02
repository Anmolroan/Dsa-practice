function runProgram(input) {
    // Write code here
    input =+input;
    let rem= input%60;
    let h= (input-rem)/60;
    if(h>1){
        console.log(h+"hrs"+" "+rem+"mins")
    }else{
        console.log(h+"hr"+" "+rem+"mins")
    }
    
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`135`);
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