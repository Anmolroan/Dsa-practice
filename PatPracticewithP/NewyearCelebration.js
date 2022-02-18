function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    var tc =+input[0];
    var line=1;
    var matrix=[];
    for(var i=0; i<tc; i++){
  var temp = input[line++].trim().split(" ").map(Number);
  matrix.push(temp);
    }
     celebration(matrix);
   
  }
  function celebration(matrix) {
      var stack=[];
      var top=-1;
      var queue=[];
      for(let i  =0 ;i<matrix.length ;i++) {
          if(matrix[i][0]===1){
              queue.push(matrix[i][1])
          }else if(matrix[i][0]===2){
              stack.push(matrix[i][1]);
              top++;
          }else if(matrix[i][0]===3){
              if(queue.length>0){
                console.log(queue[0]);
              }else{
                  console.log(-1)
              }
             
          }else if(matrix[i][0]===4){
            if(stack.length>0){
                console.log(stack[top]);
              }else{
                  console.log(-1)
              }
          }else if(matrix[i][0]===5){
              var temp =queue[0];
              queue.shift();
              stack.push(temp);
              top++;
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