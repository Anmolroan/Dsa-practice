function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    cto(N,arr)
   
  }
  function cto(N,arr){
      
      var result=-1
      for(let i =0;i<N;i++){
if(arr[i]===1){
    result =i;
    break;
}
      }
      console.log(result)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    0 0 0 1 1`);
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