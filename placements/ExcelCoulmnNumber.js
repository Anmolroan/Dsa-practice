function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i=0;i<tc;i++){
    let str=input[line++].trim();
    main(str);
   }
  }
  function main(str) {
    let alphapet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let obj = {};
    for(let i=0;i<alphapet.length;i++){
        obj[alphapet[i]]=i+1
    }
    let sum =0;
    console.log(sum)
   for(let i=0;i<str.length;i++){
    sum=sum+((26**(str.length-i-1))*obj[str[i]])
   
   }
  
   console.log(sum);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    UQPISDCS
`);
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