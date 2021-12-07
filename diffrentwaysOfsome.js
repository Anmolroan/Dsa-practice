function runProgram(input) {
    // Write code here;
    input=+input;
    find(input)
   
  }
  function find(n){
      let obj={}
      function sec(n){
          if(obj[n]!=undefined){
              return obj[n]
          }
          if(n<0){
              return 0;
          }
          if(n==0){
              return 1;
          }
         
          return obj[n]= sec(n-1)+sec(n-3)+sec(n-4)
      }
      console.log(sec(n))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5`);
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