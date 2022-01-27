function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let line =1;
    let [N,M]= input[0].trim().split(" ");
    let matrix =[];
    for(let i=0; i<N; i++) {
      let temp =input[line++].trim().split(" ").map(Number);
      matrix.push(temp);
    }
    binaryMatrix(N,M, matrix) 
      
 
    
   
  }
  function binaryMatrix(N,M, matrix) {
    //write code here
    for(let i =0;i<N;i++) {
      let output ="";
      for(let j =0;j<M;j++) {
        if(matrix[i][j]===0){
          output = output +1+" ";
        }else{
          output = output +0+" ";
        }
       
      }
      console.log(output);
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