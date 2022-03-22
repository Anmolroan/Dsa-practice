function runProgram(input) {
    // Write code here
    let [M,K]=input.trim().split(" ").map(Number);
    birthday(M,K)
   
  }

  function birthday(M,K) {
    function rec(cur,newstr){
      if(newstr.length===K){
          console.log(...newstr);
      }
      if(cur>M){
          return;
      }
      for(let i =cur;i<=M;i++){
          newstr.push(i);
          rec(i+1,newstr);
          newstr.pop();
      }
  }
  rec(1,[])
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4 2`);
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