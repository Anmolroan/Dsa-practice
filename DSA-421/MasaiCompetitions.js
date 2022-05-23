function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let [N,M] =input[line++].trim().split(" ").map(Number)
        let mat =[];
        for(let j =0;j<N;j++){
         let arr = input[line++].trim().split(" ").map(Number)
         mat.push(arr);
        }
      main(mat,N,M);
    }
  }
  function main(mat,N,M){
      let output =[];
      for(let i =0;i<N;i++){
          let max =-Infinity
          for(let j = 0;j<M;j++){
            if(mat[i][j]>max){max=mat[i][j]}
          }
         output.push(max);
      }
      console.log(...output)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    3 3
    7 7 1
    4 3 10
    1 2 3`);
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