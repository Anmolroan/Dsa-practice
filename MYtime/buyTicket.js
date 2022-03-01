function runProgram(input) {
    // Write code here
input=input.trim().split("\n");
var N=+input[0];
var matrix=[];
for(let i=1;i<=N;i++){
    var arr=input[i].trim().split(" ")
    matrix.push(arr)
}
  buyTicket(matrix)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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
  function buyTicket(matrix){
      var queue=[];
      var front=0;
      var rear=0;
    for(let i=0;i<matrix.length;i++){
        if(matrix[i][0]=="E"){
            queue.push(matrix[i][1]);
            rear++;
            console.log(rear-front)
        }
        else if(matrix[i][0]=="D"){
            if((rear-front)>0){
            console.log(queue[front]+" "+(rear-(front+1)));
            front++;
        }
        else{
            console.log(-1+" "+(rear-front))
        }
        }
    }
  }