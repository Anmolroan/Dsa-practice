function runProgram(input) {
    // Write code here
input=input.trim().split("\n");
var N=+input[0];
var matrix=[];
for(let i=1;i<=N;i++){
    var arr=input[i].trim().split(" ").map(Number);
    matrix.push(arr)
}
   find(matrix)
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
  function find(matrix){
      var stack=[];
      var queue=[];
      var top=-1;
      var front=0;
      var rear=0;
      for(let i=0;i<matrix.length;i++){
          if(matrix[i][0]===1){
              queue.push(matrix[i][1]);
              rear++;
          }
          else if(matrix[i][0]===2){
            stack.push(matrix[i][1]);
            top++;
        }
        else if(matrix[i][0]===3){
            if(queue.length>0){
            console.log(queue[front]);}
            else{
                console.log(-1)
            }
           
        }
        else if(matrix[i][0]===4){
            if(stack.length>0){
            console.log(stack[top])}
            else{
                console.log(-1)
            }
            
        }
        else if(matrix[i][0]===5&&queue.length>0){
            stack.push(queue[front]);
            top++;
            front++;
        }
      }
      
  }