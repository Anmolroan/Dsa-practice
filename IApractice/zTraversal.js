function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let test =+input[0];
    let line =1;
for(let i=0; i<test; i++){
    let N =+input[line++];
    let matrix =[];
    for(let j=0; j<N; j++){
var temp=input[line++].trim().split(" ").map(Number);

matrix.push(temp)
    }
    zTraversal(matrix,N) 
}
   
  }
  function zTraversal(matrix,N) {
    let output="";
for(let i =0;i<N;i++) {
  if(i===0||i===N-1){
  for(let j =0;j<N;j++) {
    
      output =output+" "+matrix[i][j]
    }
      
    }else{
      output = output+" "+matrix[i][N-1-i]
    }
  }
  console.log(output)
}
  
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
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