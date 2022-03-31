function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let N =+input[0];
    let str =input[1].trim();
    main(N,str);
   
  }
  function main(N,str) {
      const rec=(curr,newarr)=>{
          if(newarr.length>0){
              console.log(newarr.join(""));
          }
          if(curr===N){
              return 
          }
          for(let i =curr;i<N;i++){
              newarr.push(str[i]);
            rec(i+1,newarr);
            newarr.pop();
          }
      }
      rec(0,[])
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    abcd`);
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