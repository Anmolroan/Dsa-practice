function runProgram(input) {
    // Write code here
   input =input.trim().split("\n");
   var tc =+input[0];
   let line =1;
   for(let i=0; i<tc; i++){
       let [n,m]=input[line++].trim().split(" ").map(Number);
       
       console.log(nthroot(n,m,0));
  }
  
}
function nthroot(n,m,i){
  
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    2 9
    6 4096
    3 126`);
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