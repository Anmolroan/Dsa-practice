function runProgram(input) {
    // Write code here
    input = input.trim().split(" ").map(Number);
    recursive(input)
    
   
  }
  function recursive(input) {
      function bubble(i){
          if(i==input.length){
              return ;
          }
          for(let j = 0; j < input.length -1 -i; j++){
              if(input[j]>input[j+1]){
                [input[j], input[j+1]]=[input[j+1], input[j]];
              }
              bubble(i+1)
          }
      }
      bubble(0);
      console.log(input);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 5 0 8 9`);
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