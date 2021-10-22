function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i =0;i<test;i++){
        var N=+input[line++];
        HelperNick(N)
        
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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
  function  HelperNick(N){
    
      var amount1=1;
      var amount2=1;
      var amount3=1;
      var amount4=1;
     let  YoN=(N)=>{
        if(amount1===N||amount2===N||amount3===N||amount4===N){
          
            return "Yes";
            
        }
       
         if(amount1>N||amount2>N){
           
            return  "No";
           
            
         }
         amount3=amount1*20*10;
         amount4=amount2*10*20;
         amount1=amount1*10;
         amount2=amount2*20;
        
        
        
         return YoN(N)
     }
     console.log(YoN(N))
    
  }