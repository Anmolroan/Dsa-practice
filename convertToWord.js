function runProgram(input) {
    // Write code here
    input=input.trim()
    var i=0;
    var str="";
    var dg = ['zero','one','two','three','four','five','six','seven','eight','nine']
    console.log(+input[0
    ])
    console.log(find(input,i,str,dg))
  
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`456`);
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
  function find(input,i,str,dg){
if(i==input.length){
    return ""
}
var num=+input[i];
console.log(num)

 return str+dg[num]+" "+find(input,i+1,str,dg)
  }