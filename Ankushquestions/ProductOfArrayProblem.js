function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   let i =0;
   let p =1;

  console.log( main(arr,N,i,p))
  }
  function main(arr,N,i,p){
      if(i===N){
          return p
      }else{
          p =p*arr[i];
          
          return main(arr,N,i+1,p);
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    3 5 2 9 4`);
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