function runProgram(input) {
    // Write code here
   let N =+input;
   Nows(N)
  }
  function Nows(N) {
      const rec =(N)=>{
if(N ===0){
    return 1;
}if(N<0){
    return 0;
}
return rec(N-1)+rec(N-2)+rec(N-3)
      }
      console.log(rec(N))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4`);
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