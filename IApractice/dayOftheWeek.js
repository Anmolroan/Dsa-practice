function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let day =input[0].trim();
   let N = +input[1];
   dayOftheWeek(day,N)
  }
  function dayOftheWeek(day,N){
      let week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
      let j  =N%7;
      
      
for(let i =0;i<7;i++){
    if(week[i]===day){
        var a =i;
        break;
    }
}

console.log(week[(a+j)%7])
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`Thursday
    77`);
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