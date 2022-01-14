function runProgram(input) {
    // Write code here
input=input.trim().split("\n");
var N=+input[0];
var matrix=[];
for(let i=1;i<=N;i++){
    var arr=input[i].trim().split(" ").map(Number);
    matrix.push(arr)
}
   find(matrix);
  }
  function find(matrix){
      var stack =[];
      var queue = [];
      var N =matrix.length;
      for(let i =0;i<N;i++){
          
if(matrix[i][0]==1){
queue.push(matrix[i][1])
}
else if(matrix[i][0]==2){
    stack.push(matrix[i][1])
}
         else if(matrix[i][0]==3){
              if(queue.length>0){
                console.log(queue[0])
              }else{
                  console.log(-1)
              }
             ;
          }
          else if(matrix[i][0]==4){
              if(stack.length>0){
                console.log(stack[stack.length-1])
              }else{
                  console.log(-1)
              }
              
          }
          else if(matrix[i][0]==5){
              var q=queue[0];
              queue.shift();
              stack.push(q)
          }
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`7
1 4
2 3
1 2
3
4
5
4`);
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