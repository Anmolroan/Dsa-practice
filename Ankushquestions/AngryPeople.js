function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
   main(N,arr)
  }
  function main(N,arr) {
    let max=-Infinity
    for(let i =0;i<N;i++){
        if(i==0){
            let diff=arr[i+1]-arr[i];
            let diff2=arr[i+2]-arr[i];
            if(diff>max){max=diff};
            if(diff2>max){max=diff2}
        }else {
          if(arr[i+1]){
            let diff=arr[i+2]-arr[i];
            if(diff>max){max=diff}
          }
           
        }
    }
  
   
    console.log(max);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`7
    5 10 6 8 12 11 18`);
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