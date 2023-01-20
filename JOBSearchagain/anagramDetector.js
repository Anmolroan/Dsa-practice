function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let src = input[0].trim().split("").filter((e)=>e!==" ").sort();
    let dest =input[1].trim().split("").filter((e)=>e!==" ").sort();
   console.log (main(src,dest));
   
  }
  function main(src,dest) {
    for(let i=0;i<src.length;i++) {
        if(src[i]!==dest[i]){
            return "False"
        }
    }
    return "True"
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`anagram
    nag a ram`);
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