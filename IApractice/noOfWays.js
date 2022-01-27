function runProgram(input) {
    // Write code here
   input=+input;
   main(input)
  }
  function main(input){
      let N=[];
function now(n){
    if(N[n]!=undefined){
        return N[n];
    }
  if(n===0){
      return 1
  }
  if(n<0){
      return 0
  }
return N[n]=now(n-1)+now(n-3)+now(n-4)
  }
  console.log(now(input))
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5`);
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