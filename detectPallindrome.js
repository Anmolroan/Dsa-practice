function runProgram(input) {
    // Write code here
    input=input.trim();
    detectPallindrome(input)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1221`);
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
  function detectPallindrome(input){
      var count=0;
      var N=input.length
      var n=Math.floor(N/2);
      for(i=0;i<n;i++){
          if(input[i]==input[N-1-i]){
              count++;
          }
      }
      if(count==n){
          console.log("Yes")
      }
      else{
          console.log("No")
      }
  }