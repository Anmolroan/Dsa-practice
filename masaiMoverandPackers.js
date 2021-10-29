function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   var [K,N]=input[0].trim().split(" ").map(Number);
   var arr=input[1].trim().split(" ").map(Number);
  find(K,N,arr)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 3
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

  
  function find(K,N,arr){
      var sum=0
      
      function movers(K,N,arr){
      if(K<0){
          return 0;
      }
      if(K==0){
          return 1;
      }
   
 return movers(K-1)+movers(K-2)+movers(K-3)
  
    }

    console.log(movers(K,N,arr))
    
  } 
  