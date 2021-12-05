function runProgram(input) {
    // Write code here
   input =input.trim().split("\n");
   for(let i =0;i<input.length;i++){
       var n=+input[i]
      main(n)
   }
  }
  function  main(n){
    let obj={};
    mms=(n)=>{
      if(obj[n]!=undefined){
       
        return obj[n]
      }
      if(n==0){
        return 0;
      }
if(n===1){
  return 1;
}
obj[n]= Math.max(mms(Math.floor(n/2))+mms(Math.floor(n/3))+mms(Math.floor(n/4)),n);
return Math.max(mms(Math.floor(n/2))+mms(Math.floor(n/3))+mms(Math.floor(n/4)),n);
    }
   console.log( mms(n));

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`12
    2`);
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