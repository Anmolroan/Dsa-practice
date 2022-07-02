function runProgram(input) {
    // Write code here
    input=input.trim();
    let str =input;
   main(str);
   
  }
  function main(str) {
    let max=-Infinity
    for(let i=0;i<str.length;i++) {
        let sub="";
        for(let j=i;j<str.length;j++) {
            sub=sub+str[j];
            if(sub===(sub.split("").reverse().join(""))){
                if(max<sub.length){
                    max=sub.length;
                }
            }
            
        }
    }
    console.log(max);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`thisracecarisgood`);
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