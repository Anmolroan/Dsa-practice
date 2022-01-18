function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N,M] = input[0].trim().split(" ").map(Number);
    
    let line = 1;
    let matrix =[];
    for(let i = 0; i < N; i++) {
 let temp = input[line++].trim().split(" ").map(Number);
 matrix.push(temp);
    }
    goInZigZag(N, M, matrix)

   
  }
  function goInZigZag(N, M, matrix){
      let output = "";
for(let r = 0;r<N;r++){
    if(r%2==0){
        for(let c = M-1;c>=0;c--){
            output = output + matrix[r][c]+" ";
                }
    }else{
        for(let c = 0; c < M; c++){
            output = output + matrix[r][c]+" ";
        }
    }
 
}
console.log(output);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`);
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
