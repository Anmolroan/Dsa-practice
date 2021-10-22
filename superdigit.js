function runProgram(input) {
    // Write code here
   var [n,k]=input.trim().split(" ").map(Number);
   find(n,k)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`123 3`);
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
    
  
    function sum(i,n){
      n=n.toString()
      if(i==n.length){
        return 0;
      }
      return +n[i]+sum(i+1,n)
    }
  
  n=sum(0,n)*k;
  console.log(n)
  function superdigit(n){
    if(n<9){
      return n
    }
    sum=sum

  }


  
}