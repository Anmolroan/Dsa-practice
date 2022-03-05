function runProgram(input) {
    // Write code here
input=input.trim().split("\n");
var N=+input[0];
var matrix=[];
for(let i=1;i<=N;i++){
    var arr=input[i].trim().split(" ")
    matrix.push(arr)
}
   find(matrix);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
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
  function find(matrix){
  var team1=[];
  var team2=[];
  var team3=[];
  var team4=[];
  var queue=[];
  var front=0;
  for(let i =0;i<matrix.length;i++){
    if(matrix[i][0]=="E"){
      queue.push(matrix[i][1])
      if(matrix[i][1]==1){
        team1.push(matrix[i][2]);
        
      }
      else if(matrix[i][1]==2){
        team2.push(matrix[i][2])
      }
      else if(matrix[i][1]==3){
        team3.push(matrix[i][2])
      }
      else if(matrix[i][1]==4){
        team4.push(matrix[i][2])
      }
    }
    else if(matrix[i][0]=="D"){
      if(queue[0]==1){
        if(team1.length>0){
          console.log(1+" "+team1[0]);
          team1.shift();
        }
        else{
          queue.shift();
        }
      }
      if(queue[0]==2){
        if(team2.length>0){
          console.log(2+" "+team2[0]);
          team2.shift();
        }
        else{
          queue.shift();
        }
      }
      if(queue[0]==3){
        if(team3.length>0){
          console.log(3+" "+team3[0]);
          team3.shift();
        }
        else{
          queue.shift();
        }
      }
      if(queue[0]==4){
        if(team4.length>0){
          console.log(4+" "+team4[0]);
          team4.shift();
        }
        else{
          queue.shift();
        }
      }
    }
  }

  }