function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
   
    let test =+input[0];
    
    let line = 1;
    for(j=0;j<test;j++)
      let N =+input[line++];
      var matrix =[];
    for(let i =0;i<N;i++){
        let temp=input[line++].trim().split(" ").map(Number)
        matrix.push(temp);
    }
    console.log(matrix,N);
  }
  
  function rotate(matrix,N){

       for(let i =0;i<Math.floor(N/2);i++){
           for(let j=i;j<N-1-i;j++){
            let temp = matrix[i][j];
            matrix[i][j]=matrix[j][N-1-i];
        
           
            matrix[j][N-1-i]=matrix[N-1-i][N-1-j];
            matrix[N-1-i][N-1-j]=matrix[N-1-j][i];
            matrix[N-1-j][i]=temp;
           }
          
       }
      //  console.log(matrix)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
    3
    1 2 3
    4 5 6
    7 8 9`);
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