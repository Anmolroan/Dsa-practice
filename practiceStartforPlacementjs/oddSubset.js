function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
        var [N]=input[0].trim().split(" ").map(Number);
        var arr=input[1].trim().split(" ").map(Number);
       main(N,arr)
   
  }
  function main(N,arr) {
      let count =0;
      function rec(cur,newarr) {
          if(newarr.length>=0){
              for(let i =0;i<newarr.length;i++){
                 
              }
          }
          if(cur===N){
              return
          }
          for(let i=cur;i<N;i++){
              newarr.push(arr[i]);
              rec(i+1,newarr);
              newarr.pop();
          }
      }
      rec(0,[])
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    1 2 3`);
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