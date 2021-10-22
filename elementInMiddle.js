function runProgram(input) {
    // Write code here
    var matrix=[];
   input=input.trim().split("\n");
   var [N,M]=input[0].trim().split(" ").map(Number);

  
   for(i=1;i<=N;i++){
       matrix.push(input[i].trim().split(" ").map(Number))
   }
   printSum(N,M,matrix)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 2
    1 2 
    3 4
    5 6
    `);
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

 function  printSum(N,M,matrix){
     for(i=0;i<N;i++){
         var sum=0;
         for(j=0;j<M;j++){
             sum=sum+matrix[i][j]
         }
         console.log(sum)
     }
 }