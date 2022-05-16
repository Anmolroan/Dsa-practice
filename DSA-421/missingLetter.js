function runProgram(input) {
    // Write code here
   let arr=input.trim().split(' ').map(Number);
main(arr);
  }
  function main(arr) {
      arr.sort((a,b)=>a-b);
      for(let i=0; i<arr.length; i++){
          if(arr[i]!=i+1){
              console.log(i+1);
              break;
          }
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4 5 1 3`);
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