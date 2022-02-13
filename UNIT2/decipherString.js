function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc=+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N = +input[line++];
        let str =input[line++].trim();
       decipherString(N,str)
    }
  }
  function decipherString(N,str){
     
      let i =0;
      let j =1;
      let bag="";
      while(i<N-1&&j<N){
          let pivot =str[j];
          for(let k=0;k<pivot;k++){
            bag=bag+str[i];
          }
          i=i+2;
          j=j+2;
      }
      console.log(bag);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    6
    a2b1c2
    6
    a2z1a2`);
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