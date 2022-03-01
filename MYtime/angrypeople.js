function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
   let N = +input[0];
   let arr =input[1].trim().split(" ").map(Number);
   arr.sort((a,b)=>a-b)
  find(N,arr)
   
  }
  function find(N,arr){
      var max=null;
      for(let i =0;i<arr.length-2;i++){
          var first =arr[i+2]-arr[i];
          var second =arr[i+1]-arr[i];
          if(first<second){
              var check=second
          }else{
              check=first
          }
          if(max==null||check>max){
              max=check
          }
      }
      console.log(max)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    5 10 6 8`);
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