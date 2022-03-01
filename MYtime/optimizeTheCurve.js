function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i =0 ; i<test;i++){
        let [A,B,C,K]=input[line++].trim().split(" ").map(Number);
        curve(A,B,C,K)
    }
   
  }
  function curve(A,B,C,K){;
    let result=-1;
    var i=1;
    var j=K;
    
      while(i<=j){
        let mid=i+Math.floor((j-i)/2)
          var Xo=mid;
          // console.log(mid)
          var equation=(A *(Xo**2)) + (B* Xo) + C ;
          // console.log(Xo)
          // console.log(equation)
        
          if(equation<K){
         
              
              result=Xo;
              i=mid+1;
          }
          else if(equation >= K){
          

              j=mid-1;
          }
         
       
      }
      console.log(result)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    3 2 4 15`);
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