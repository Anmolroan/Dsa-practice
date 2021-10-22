function runProgram(input) {
    // Write code here;
    input=+input;
    pyramid(input)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`25`);
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
  function pyramid(input){
    var sum=0;
    var count=0;
    var totalsum=0;
      for(i=1;i<=input;i++){
      
        
        sum=sum+i;
        totalsum=totalsum+sum;
      if(totalsum>input){break;}
      count++;
      }
      
     
      
    console.log(count)
  }