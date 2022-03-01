function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i=0;i<test;i++){
        var N=+input[line++];
        var arr=input[line++].trim().split(" ").map(Number);
        digitsum(N,arr)
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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
function  digitsum(N,arr){
    var output="";
    for(let i=0;i<N;i++){
        var string=arr[i].toString();
        
        var sum=0;
        for(let j=0;j<string.length;j++){
            sum=sum+Number(string[j])
        }
        output=output+sum+" ";
        
     
    }
    console.log(output)
}