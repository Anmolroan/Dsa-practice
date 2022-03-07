function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let  tc =+input[0];
    let line =1;
    for(let i=0; i<tc; i++){
let [N,M]=input[line++].trim().split(" ").map(Number);
let matrix =[];
for(let j =0;j<N;j++){
matrix.push(input[line++].trim().split(" ").map(Number))
}
spiral(N,M,matrix);
    }
   
  }
  function spiral(N,M,matrix){
      var top =0;
      var bottom =N-1;
      var left = 0;
      var right =M-1;
var bag ="";
var count =0;
while(count<N*M){
      for(let i =top;i<=bottom&&count<N*M;i++){
          
          bag =bag +" "+matrix[i][left];

          count++;
      }
      left++;
      for(let i =left;i<=right&&count<N*M;i++){
          bag=bag +" "+matrix[bottom][i];
          count++;
      }
      bottom--;
      for(let i=bottom;i>=top&&count<N*M;i--){
        bag=bag +" "+matrix[i][right];
        count++;
      }
      right--;
      for(let i=right;i>=left&&count<N*M;i--){
          bag=bag +" "+matrix[top][i];
          count++;
      }
      top++;
    }
    console.log(bag);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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