function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let N =+input[0];
    let lobby = input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
    let room = input[2].trim().split(" ").map(Number).sort((a, b) =>a-b);
   main(N,lobby,room)
  }
  function main(N,lobby,room){
    let i =0;
    let max =-Infinity
    while(i<N){
        let temp=Math.abs(lobby[i]-room[i]);
        max = Math.max(max,temp);
        i++
    }
    console.log(max);
  }
 
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    -2 4
    -2 0 `);
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