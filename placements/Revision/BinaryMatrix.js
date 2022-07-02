function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var [N,M]=input[0].trim().split(" ").map(Number);
    var matrix=[];
    var line=1;
    for(let i=0;i<N;i++){
      var m=input[line++].trim().split(" ").map(Number);
      matrix.push(m)
    }
   change(matrix,N,M)
  }
  function change(matrix,N,M){
    for(let i = 0; i < N ; i++){
        for(let  j = 0; j < M; j++){
            if(matrix[i][j]==0){
                matrix[i][j]=1;
            }else if(matrix[i][j]==1){
                matrix[i][j]=0;
            }
        }
        console.log(matrix[i].join(" "))
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 2
    1 0
    0 1
    1 1`);
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