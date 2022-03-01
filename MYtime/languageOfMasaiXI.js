function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let N =+input[0];
   let string =input[1].trim();
   addHeros(N,string);
  }
  function addHeros(N,string) {
      if(string[0]==="a"||string[0]==="e"||string[0]==="i"||string[0]==="o"||string[0]==="u"){
          console.log(string+"hulk");
      }else{
          console.log(string+"thor");
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    abced`);
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