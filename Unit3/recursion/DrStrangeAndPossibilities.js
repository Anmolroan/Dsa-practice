function runProgram(input) {
    // Write code here
    N =+input;
    Strange(N);
   
  }
  function Strange(N){
      function rec(cur,newstr){
          if(newstr.length>=0){
              console.log(...newstr);
          }
          if(cur>N){
              return;
          }
          for(let i =cur;i<=N;i++){
              newstr.push(i);
              rec(i+1,newstr);
              newstr.pop();
          }
      }
      rec(1,[])
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3`);
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