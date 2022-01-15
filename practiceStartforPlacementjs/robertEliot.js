function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let  i = 0; i< test;i++){
        var N =+input[line++];
        var str=input[line++].trim()
        main(N,str)
    }
   
  }
  function main(N,str){
     function mid(N,h,l){
         if(l===h){
             return "";
         }
         return newstr+str(Math.floor(l+h)/2)+mid(N)
     }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3
    abc
    4
    abcd
    11
    abcdefghijk`);
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