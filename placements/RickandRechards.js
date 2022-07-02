function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i=0;i<tc;i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        main(N,arr);
    }
   
  }
  function main(N,arr){
    let i=0;
    let j=N-1;
    let a=0;
    let b=0;
   while(i<j){
  
   if(arr[i]>arr[j]){
    arr[i]=arr[j];
    
   }
   }
   
   console.log(a,b)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    6
    9 2 2 2 2 2`);
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