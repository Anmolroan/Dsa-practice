function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N = +input[0];
    let str = input[1].trim();
stringCordinates(N,str)
  }
  function stringCordinates(N,str) {
let r=0;
let c =0;
    for(let i = 0; i < N; i++) {
        if (str[i] === 'u')r = r + 1;
       else if (str[i] === 'd')  r = r - 1;
        else if (str[i] === 'r')  c= c+ 1;
        else{ c = c- 1};
    }
    console.log(r,c)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    lldd`);
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