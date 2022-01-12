function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    kingoftaxes(N,arr);
   
  };
  function kingoftaxes(N,arr){
      arr.sort((a,b)=>b-a);
     
      sum =0;
      for(let i =0;i<N;i++){
sum =sum+arr[i];
      }
      console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    1 3 1 2`);
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
