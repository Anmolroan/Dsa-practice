function runProgram(input) {
    // Write code here
    let arr =[ 1, 2, 5, 10, 20, 50, 100, 500, 1000];
   input= input.trim().split('\n');
   let tc = +input[0];
   let line =1;
   for(let i =0;i<tc ;i++){
    let K =+input[line++];
    main(K,arr)
   }
  }
  function main(K,arr) {
      function Lowerbound(i,j,arr,K){
        
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    45
    93
    29`);
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