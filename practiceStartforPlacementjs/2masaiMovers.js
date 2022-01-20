function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [K,N]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   main(K,N,arr)
  }
  function main(K,N,arr) {
      function masai(sum,newarr){
          if(sum===K){
              console.log(newarr)
          }
          if(sum>K){
              return
          }
          for(let i =0;i<N;i++){
              sum =sum + arr[i];
              newarr.push(arr[i]);
              masai(sum,newarr);
              newarr.pop();
          }
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`39 3
    8 10 2`);
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