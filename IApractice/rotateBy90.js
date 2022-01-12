function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let N =+input[0];
    var matrix =[];
    let line = 1;
    for(let i =0;i<N;i++){
        let temp=input[line++].trim().split(" ").map(Number)
        matrix.push(temp);
    }
    rotate(matrix,N);
   
  }
  function rotate(matrix,N){
       for(let i =0;i<N;i++){
           for(let j=0;j<N;j++){
            
           }
       }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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