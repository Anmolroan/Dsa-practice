
  function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];

   let line = 1;
   
   for(let i =0;i<tc;i++){
    let N =+input[line++];
    let matrix = [];
    for(let j =0;j<N;j++){
        let temp=input[line++].trim().split(" ").map(Number);
       matrix.push(temp)
    }
    find(matrix)
   
   }
  
  }
  function find(matrix){
    let obj={};
    let count =0;
    for(let i =0;i<matrix.length;i++){
       for(let j =0;j<matrix[i].length;j++){
       if(!obj[matrix[i][j]]){
        obj[matrix[i][j]]=1;
        count++;
       }else{
        continue;
       }
       }
    }
    console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    3
    1 2
    2 3
    1 3
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