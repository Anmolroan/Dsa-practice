function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let test = +input[0];
    let line =1;
    for(let i = 0; i < test;i++) {
        let N =+input[line++];
        let matrix =[];
        for(let j = 0; j < N; j++){
            let temp = input[line++].trim().split(" ").map(Number);
            matrix.push(temp);
        }
        nTraversal(matrix,N) 

    }
   
  }
  function nTraversal(matrix,N) {
//   console.log(matrix,N);
  let top =0;
  let bottom =N-1;
  let left = 0;
  let right = N-1;
  let output ="";
  for(let i=bottom; i>=top; i--) {

   output = output+matrix[i][left]+" ";

  }
  top++;
  for(let i=top; i<=bottom; i++) {
      output =output + matrix[i][i]+" ";
  }
  bottom--;
  top--;
  for(let i=bottom; i>=top; i--) {
      output = output + matrix[i][right]+" ";
  }
console.log(output);
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
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