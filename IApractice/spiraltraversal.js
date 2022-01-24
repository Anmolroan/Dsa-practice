function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
let N = input[0];
let matrix = [];
let line =1;
for(let i = 0; i < N; i++){
let temp = input[line++].trim().split(" ").map(Number);
matrix.push(temp);
}
main(N,matrix)
   
  }
  function main(N,matrix){
      let top =0;
      let bottom =N-1;
      let left =0;
      let right =N-1;
      let output ="";
      let count=0;
      while(count<N*N){
      for(let i=left;i<=right;i++){
          output =output + matrix[top][i] +" ";
          count++;
          if(count===N){
            break;
          }
      }
      top++;
      for(let i=top;i<=bottom;i++){
        output =output + matrix[i][right] +" ";
        count++;
        if(count===N){
          break;
        }
      }
      right--;
      for(let i=right;i>=left;i--){
        output =output + matrix[bottom][i] +" ";
        count++;
        if(count===N){
          break;
        }
      }
      bottom--;
      for(let i=bottom;i>=top;i--){
        output =output + matrix[i][left] +" ";
        count++;
        if(count===N){
          break;
        }
      }
      left++;
      }
      console.log(output);
    
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