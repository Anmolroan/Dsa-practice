function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   main(N,arr);
  }
  function main(N,arr) {
    
      let str="";
      for(let i=0;i<arr.length;i++){
         if(arr[i]>=0){
             str+=arr[i]
         }else{
             str+=0
         }
      }
      console.log(str)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    2 -4 6 8 -9`);
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