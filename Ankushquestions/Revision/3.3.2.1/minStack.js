function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var N=+input[0];
   
    var matrix=[];
    for(let i=1;i<=N;i++){
      var s=input[i].trim().split(" ");
      matrix.push(s)
     
    }
    
    find(matrix);
   
  }
  function find(matrix){
    console.log(matrix);
    let stack=0;
    for(let i =0;i<matrix.length;i++){

    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`8
    push 5
    push 3
    push 1
    getMin
    pop
    getMin
    pop
    getMin`);
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
  