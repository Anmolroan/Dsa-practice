function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line=1;
   for(let i =0;i<tc;i++){
    let str1=input[line++].trim().split("").sort();
    let str2=input[line++].trim().split("").sort();
    main(str1,str2)
   }

  }
  function main(str1,str2){
   let i =0;
   let flag="True"
    for(let i=0;i<Math.max(str1.length,str2.length);i++){
        if(str1[i]!==str2[i]){
            flag="False"
        }
    }
    console.log(flag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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
