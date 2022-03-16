function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
        Binary(N)
    }
   
  }
  function Binary(N){
      let ans ="";
      console.log(rec(N).split("").reverse().join(""));
    function  rec(N){
if(N===1){
    return 1;
}
if(N===0){
    return 0;
}
return ans+N%2 +rec((N-(N%2))/2)
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    15
    128`);
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