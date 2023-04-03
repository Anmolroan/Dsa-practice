function runProgram(input) {
    // Write code here
    let N =+input;
    main(N)
   
  }

  function main(N){
    
    let arr=[];
    let i=0;
    let flag =true;
    
   while(i>=0 ){
    let temp="";
    let index= N;
    for(var j =0;j<=i;j++){
        
        temp+=j
    };
    index= N;
    for(let k=j-2;k>=0;k--){
        
       temp+=k
    }
    if(i===N){
        flag=false
    }
    
   
    for(let n =0;n<N-i;n++){
        temp=" "+temp+" "
    }
    
    console.log(temp.split("").join(" "));
    if(flag){
        i++;
    }else{
        i--;
    }
    
   }
  }

  if (process.env.USER=== "anmolkumar") {
    runProgram(`2`);
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