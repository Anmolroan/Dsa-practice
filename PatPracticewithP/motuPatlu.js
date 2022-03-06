function runProgram(input) {
    // Write code here;
    let N =+input[0];
    motuPatlu(N);
   
  }
  function motuPatlu(N) {
    let max =null;
      function rec(N,cur){
          if(N===0){
            if(max==null||cur<max){
              max = cur;
            }
              return ;
              
          }if(N<0){
              return 
          }
        
          rec(N-5,cur+1)
          rec(N-4,cur+1)
          rec(N-3,cur+1)
          rec(N-2,cur+1)
          rec(N-1,cur+1);
      }
      rec(N,0);
      console.log(max)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`26`);
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