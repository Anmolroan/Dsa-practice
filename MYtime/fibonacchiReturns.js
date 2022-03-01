function runProgram(input) {
    // Write code here
   input =+input;
   main(input)
  }
  function main(input){
      let f=[];
let count=0;
     function fib(n){
       
         if(f[n]!=undefined){
            //  console.log(f[n])
             return f[n]
         }
        
          if(n==0){
              return 0;
          }if(n===1){
              return 1;
          }
        
          return f[n]= fib(n-1)+fib(n-2);
      }
     console.log(fib(input));
  
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`45`);
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