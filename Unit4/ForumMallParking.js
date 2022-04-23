function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let arrival = input[line++].trim().split(' ').map(Number);
        let departure = input[line++].trim().split(' ').map(Number);
       main(arrival,departure)
    }
   
  }
  const main =() => {
      
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    1 3 5
    2 6 8`);
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