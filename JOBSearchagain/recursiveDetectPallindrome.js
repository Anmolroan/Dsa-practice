function runProgram(input) {
    // Write code here
    input =input.trim();
    main(input)
   
  }
function main(str) {
    let flag =true;
    let N= str.length;
    function rec(i,N){
        if(i===Math.floor(N/2)){
            return 
        }
        if(str[i]!==str[N-1-i]){
            flag=false;
            return 
        }
        rec(i+1,N)
    };
    rec(0,N);
    console.log(flag);
}

  if (process.env.USER=== "anmolkumar") {
    runProgram(`12213`);
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