function runProgram(input) {
    // Write code here
   var [n,k]=input.trim().split(" ");
   find(n,+k);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`148 3`);
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
  function find(n,k){
      let ans=rec(n) ;
    
      var a =(+ans)*k;
if(a>9){
ans=rec(a.toString());

}
console.log(ans)
}

function rec(n){
    if(n.length==1){
      
       return n;
    }
    var str =n
    var sum=0
    for(let i =0;i<str.length;i++){
       sum=sum+(+str[i]);

    };
    sum =sum.toString()
    return rec(sum);
}