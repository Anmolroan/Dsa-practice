function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc = +input[0];
    let line =1;
    for(let i = 0; i < tc; i++) {
        let N = +input[line++];
        main(N)
    }

   
  }
  function main(N) {
let flag="True";
    function rec(N){
        if(N===1){
            return
        }
        if(N%2!==0 ){
            flag="False";
            return 
        }
        rec(N/2);
    }
    rec(N);
    console.log(flag);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    2
    3`);
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