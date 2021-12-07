function runProgram(input) {
    // Write code here;
    input =input.trim().split("\n");
    var N =+input[0]
    var line=1;
    for(let i =0;i<N;i++){
        var n =input[line++].trim()
        lift(n)
    }
   
  }
  function lift(str){
      var count=1;
      for(let i =0;i<str.length-1;i++){
if(str[i+1]!=str[i]){
    count++;
}
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    aaaaa
    abbbaaz`);
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
