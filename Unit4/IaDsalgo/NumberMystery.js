function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i =0;i<tc;i++){
       let N =+input[line++];
       main(N)
   }
  }
  function main(N) {
      let str ="1";
      let queue = [];
      function rec(str){
          if((queue[0])%N===0){
              return 
          }
          queue.shift(str)
          return rec(str+"1")||  rec(str+"0")
      }
     rec(str);
     console.log(queue)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    17
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