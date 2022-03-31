function runProgram(input) {
    // Write code here
    let N =+input;
    pattern(N)
   
  }
  function pattern(N){
  for(let i =0;i<N;i++){
    let bag ="";
      for(let j =0;j<N;j++){
          if(i===0||i===N-1){
bag =bag+"*"+" ";
          }else{
              if(j === N-1){
                  bag =bag+"*"+" ";
              }else{
                  bag =bag+" "+" ";
              }
          }
      }
      console.log(bag);
  }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`24`);
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
