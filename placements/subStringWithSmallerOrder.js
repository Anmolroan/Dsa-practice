function runProgram(input) {
    // Write code here
    let str =input.trim();
    main(str);
   
  }
  function main(str){
      let c =1;
     
      let max =1;
      
      for(let i=0;i<str.length;i++){
        if(str[i+1]>=str[i]){
           
            c++;
        }else{
            
            if(c>max){max=c};
            c=1;
            newstr=""
        }
       
      }
      console.log(max);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`efghijklmabcdefghimnopqrst`);
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