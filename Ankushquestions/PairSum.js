function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   main(N,arr)
  }
  function main(N,arr) {
      let i = 0;
      let j = 1;
      let count =0;
      while(i<j&&j<arr.length){
          let sum =arr[i]+arr[j];
          if(sum%2===0){
              count++;
          }
          i++;
          j++;
      }
      console.log(count);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    1 2 3 4 5`);
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